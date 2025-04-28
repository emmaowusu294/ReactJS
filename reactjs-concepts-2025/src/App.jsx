import './App.css';
import ClassBasedComponent from './components/class-based-components';
import FunctionalComponent from './components/functional-component';
import ProductList from './components/products';
import Users from './components/users';

const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  return (
    <div>
      <h1>Reacts JS Concepts</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent /> */}

      {/* <ProductList listOfProducts = {dummyProductData} name = '4Ts' city = 'Kumasi' /> */}
      <Users />
    </div>
  );
}

export default App;
