import ProductItem from "./components/product-item";
import './style.css';




function ProductList({name, city, listOfProducts}) {

    // const {name, city} = props;
    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            {/* <ProductItem /> */}
            <h4>Name is {name}, he is from {city}</h4>

            <ul>
                {
                    listOfProducts.map((item, index) => (
                        <ProductItem singleProductItem ={item} key = {index}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default ProductList;