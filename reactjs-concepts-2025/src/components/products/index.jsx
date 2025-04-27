import ProductItem from "./components/product-item";
import './style.css';




function ProductList({name, city, listOfProducts}) {


    const flag = true;

    /*
    function renderTextBlock (getFlag) {
        return getFlag ? <h4>Name is {name}, he is from {city}</h4>
        : <h4>Flag was false!!</h4>
    };
    */
   let renderTextBlock = flag ? 
       <h4>Name is {name}, he is from {city}</h4>
    : <h4>Flag was false!!</h4>

    // const {name, city} = props;
    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            {/* <ProductItem /> */}
            {renderTextBlock}
            

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