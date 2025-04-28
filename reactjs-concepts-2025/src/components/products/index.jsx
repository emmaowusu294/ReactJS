import { useState } from 'react';
import ProductItem from './components/product-item';
import './style.css';

function ProductList({ name, city, listOfProducts }) {
  //   const flag = true;

  const initialState = true;

  const [flag, setFlag] = useState(initialState);

  function handleToggleText() {
    setFlag(!flag);
  }

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {/* <ProductItem /> */}

      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <p>False Hello</p>
      )}

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
