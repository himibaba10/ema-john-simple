import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faStar as fasStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const handleAddProduct = props.handleAddProduct;
  const handleRemoveProduct = props.handleRemoveProduct;

  const { name, seller, img, price, stock, star, features, key, quantity } =
    props.product;
  const starCount = [];
  const missingStar = [1, 2, 3, 4, 5];
  for (let i = 1; i <= star; i++) {
    starCount.push(i);
    missingStar.pop();
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          {props.productDetails ? name : (<Link to={"/product/" + key}>{name}</Link>)}
        </h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <div className="product-description">
          <div>
            <p>${price}</p>
            {props.showStock && (
              <p>
                <small>only {stock} left in stock - order soon</small>
              </p>
            )}
            {props.showButton && (
              <button
                className="main-button"
                onClick={() => handleAddProduct(props.product)}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faShoppingCart}
                />
                Add to cart
              </button>
            )}
            {props.removeButton && (
              <button
              onClick = {() => handleRemoveProduct(key)}
              className="main-button">Remove Product</button>
            )}
          </div>
          <div>
            {props.showStar === true && (
              <div>
                {Array.from(Array(star), () => (
                  <FontAwesomeIcon style={{ color: "gold" }} icon={fasStar} />
                ))}
                {Array.from(Array(5 - star), () => (
                  <FontAwesomeIcon style={{ color: "gold" }} icon={farStar} />
                ))}
              </div>
            )}
            {
              props.showFeatures && <div>
                <h4>Features</h4>
                <ul className="features-list">
                  {features.map((feature) => (
                    <li>
                      {feature.description}: <strong>{feature.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            }
          </div>
          {quantity && (
            <div style={{ marginLeft: "50px" }}>
              <h4>Quantity: {quantity}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
