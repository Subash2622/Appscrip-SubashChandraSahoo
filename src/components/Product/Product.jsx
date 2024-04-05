"use client";
import React, { useState } from "react";
import "./Product.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ProductList from "./ProductList";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import ProductFilter from "./ProductFilter";
const Product = () => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <main>
      {/* Product Bar */}
      <section className="product-bar">
        <div className="side-filter-section">
          <p>3425 items</p>
          <div>
            {showFilter ? (
              <KeyboardArrowLeftIcon onClick={toggleFilter} />
            ) : (
              <KeyboardArrowRightOutlined onClick={toggleFilter} />
            )}
            <p>
              <a href="#" onClick={toggleFilter}>
                {showFilter ? "Hide Filter" : "Show Filter"}
              </a>
            </p>
          </div>
        </div>
        <div className="dropdown-filter-section">
          <select>
            <option>Recomended</option>
            <option>Newest first</option>
            <option>popular</option>
            <option>price:high to low</option>
            <option>price:low to high</option>
          </select>
        </div>
      </section>

      {/* Product Filter & Product List */}
      <section className="Product-f-l">
        <div className={`item-filter ${showFilter ? "show" : ""}`}>
          {/* <ProductFilter/> */}
          <div className="customize">
            <input type="checkbox" id="customize" name="customize"/>
            <label for="customize">Customize</label>
          </div>
          <div>
            <ProductFilter/>
          </div>
        </div>

        {/* All Products */}
        <div className="all-products">
          <ProductList />
        </div>
      </section>
    </main>
  );
};

export default Product;
