import './App.css';
import ClassBasedComponent from './components/class-based-components';
import ContextButtonComponent from './components/context-context/button';
import ContextTextComponent from './components/context-context/text';
import FormComponent from './components/form';
import FunctionalComponent from './components/functional-component';
import LoginComponent from './components/login';
import ProductList from './components/products';
import RegisterComponent from './components/register';
import UseReducerExample from './components/use-reducer-example';
import Users from './components/users';

const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  return (
    <div>
      <h1>Reacts JS Concepts</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent /> */}

      {/* <ProductList listOfProducts = {dummyProductData} name = '4Ts' city = 'Kumasi' /> */}
      {/* <Users /> */}
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}
      {/* <UseReducerExample /> */}
      {/* <FormComponent /> */}
      <div style={{display: 'flex', gap: '20px'}}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
}

export default App;
