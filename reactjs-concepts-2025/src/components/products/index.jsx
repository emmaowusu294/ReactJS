import ProductItem from "./components/product-item";


const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function ProductList() {
    return (
        <div>
            <h3>ECommerce Project</h3>
            <ProductItem />
        </div>
    );
}

export default ProductList;