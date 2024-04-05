import React, { useState } from 'react';
import './ProductFilter.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function ProductFilter() {
  const [showIdealFor, setShowIdealFor] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);

  const clearOptions = () => {
    setShowIdealFor(false);
    setShowColor(false);
    setShowSize(false);
  };

  return (
    <div>
      <FilterButton
        onClick={() => setShowIdealFor(!showIdealFor)}
        show={showIdealFor}
        label="IDEAL FOR"
      />
      {showIdealFor && (
        <div className='filter-items'>
          <p><a onClick={clearOptions}>Unselect all</a></p>
          <input type="radio" id="men" name="gender" value="men" />
          <label htmlFor="men">Men</label><br />
          <input type="radio" id="women" name="gender" value="women" />
          <label htmlFor="women">Women</label><br />
          <input type="radio" id="baby" name="gender" value="baby" />
          <label htmlFor="baby">Baby</label><br />
        </div>
      )}

      <FilterButton
        onClick={() => setShowColor(!showColor)}
        show={showColor}
        label="COLOR"
      />
      {showColor && (
        <div className='filter-items'>
          <p><a onClick={clearOptions}>Unselect all</a></p>
          <input type="checkbox" id="color_red" name="color" value="red" />
          <label htmlFor="color_red">Red</label><br />
          <input type="checkbox" id="color_blue" name="color" value="blue" />
          <label htmlFor="color_blue">Blue</label><br />
          <input type="checkbox" id="color_green" name="color" value="green" />
          <label htmlFor="color_green">Green</label><br />
        </div>
      )}

      <FilterButton
        onClick={() => setShowSize(!showSize)}
        show={showSize}
        label="SIZE"
      />
      {showSize && (
        <div className='filter-items'>
          <p><a onClick={clearOptions}>Unselect all</a></p>
          <input type="checkbox" id="size_xs" name="size" value="XS" />
          <label htmlFor="size_xs">XS</label><br />
          <input type="checkbox" id="size_s" name="size" value="S" />
          <label htmlFor="size_s">S</label><br />
          <input type="checkbox" id="size_m" name="size" value="M" />
          <label htmlFor="size_m">M</label><br />
          <input type="checkbox" id="size_l" name="size" value="L" />
          <label htmlFor="size_l">L</label><br />
          <input type="checkbox" id="size_xl" name="size" value="XL" />
          <label htmlFor="size_xl">XL</label><br />
        </div>
      )}
    </div>
  );
}

function FilterButton({ onClick, show, label }) {
  return (
    <div>
      <button onClick={onClick}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} {label}
      </button>
    </div>
  );
}

export default ProductFilter;
