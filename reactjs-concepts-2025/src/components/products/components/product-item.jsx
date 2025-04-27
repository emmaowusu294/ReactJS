import styles from './product-item.module.css';

function ButtonComponent () {
    console.log(styles);
    return <button className={styles.buttonStyle}>Click</button>;
}

function ProductItem ({singleProductItem, key}) {
    return (
        <div className= {styles.productContainer}>
            <p className= {styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    );
}

export default ProductItem;

// This product item would be imported into the 
// index.jsx which in turn is imported 
// intp the App.jsx {Nested Components}