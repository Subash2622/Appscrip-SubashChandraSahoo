import React, { useEffect, useState } from "react";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data), setProducts(data);
      })
      .catch((error) => console.log("Error fetching products", error));
  }, []);
  return (
    <>
      <section className="whole-product-section">
        {products.map(product=>(
          <div key={product.id} className="product-card">
            <div className="card-image">
              <img
                src={product.image}
                alt="product-image"
              />
            </div>
            <div className="card-details">
              <div>
                <p className="p-name">{product.category}</p>
                <p className="p-title">
                  {product.title}
                </p>
              </div>
              <div className="p-section">
                <p className="p-selling-price">${product.price}</p>
                <p className="p-price">$999</p>
                <p className="p-discount">45%</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default ProductList;
