import React, { useEffect, useState } from 'react';
import { addToDb } from '../../resources/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from "./../../resources/fakeData/products.JSON";
import "./Shop.css";


const Shop = ({products, setProducts}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(fakeData && fakeData)
        .then(res => res && res.json())
        .then(data => {
            setProducts(data.slice(0,10))
        })
    });

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleRemoveProduct = () => {
        console.log("Item remove clicked")
    }

    return (
        <div className="shop">
            <div className="product-section">
                {
                    products && products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddProduct={handleAddProduct}
                        showStock = {true}
                        showStar = {true}
                        showButton = {true}
                        showFeatures = {true}
                        handleRemoveProduct = {handleRemoveProduct}
                        />)
                }
            </div>
            <div className="cart-section">
                <Cart showReviewButton = {true} />
            </div>
        </div>
    );
};

export default Shop;