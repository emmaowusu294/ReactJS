
function ButtonComponent () {
    return <button>Click</button>;
}

function ProductItem ({singleProductItem, key}) {
    return (
        <div>
            <p>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    );
}

export default ProductItem;

// This product item would be imported into the 
// index.jsx which in turn is imported 
// intp the App.jsx {Nested Components}