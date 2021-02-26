import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img}/>
            </div>
            <div className="product-details">
                <h3 style={{color: "blue"}}>{name}</h3>
                <br/>
                <p><small>by:</small> {seller}</p>
                <h3>${price}</h3>
                <p><small>only {stock} left in stock - get soon</small></p>
                <button className="main-button"
                onClick={() => props.handleAppProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>
        </div>
    );
};

export default Product;