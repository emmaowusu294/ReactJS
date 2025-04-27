
function ButtonComponent () {
    return <button>Click</button>;
}

function ProductItem () {
    return (
        <div>
            <p>Product 1</p>
            <ButtonComponent />
        </div>
    );
}

export default ProductItem;

// This product item would be imported into the 
// index.jsx which in turn is imported 
// intp the App.jsx {Nested Components}