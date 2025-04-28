import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './components/product-item';
import './style.css';

function ProductList({ name, city, listOfProducts }) {
  //   const flag = true;

  const initialState = true;

  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function handleToggleText() {
    setFlag(!flag);
  }

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log('this is the first time on page load');

    return () => {
      console.log('component is unmounted -> some side effect');
    };
  }, []); // this will only run on page load once

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);

  console.log(changeStyle);

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

      <div>
        <button
          style={{
            backgroundColor: changeStyle ? 'red' : 'black',
            color: changeStyle ? 'black' : 'red',
          }}
          onClick={handleIncreaseCount}
        >
          Increase Count
        </button>
        <p>Count is {count}</p>
      </div>

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
