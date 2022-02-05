import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clearTheCart, getStoredCart } from "../../resources/utilities/fakedb";
import fakeData from "./../../resources/fakeData/products.JSON";
import "./Cart.css";

const Cart = (props) => {
  const handleNumber = (num) => Number(num?.toFixed(2));
  const cartProducts = getStoredCart();

  const cartItems = Object.keys(cartProducts);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  const cart = cartItems.map(
    (key) => products && products.find((pd) => pd && pd.key === key)
  );
  cart.map((pd) => pd && (pd.quantity = cartProducts[pd.key]));

  const productPrice = cart.reduce(
    (sum, ct) => ct && sum + ct.quantity * ct.price,
    0
  );

  let shipping = 0;
  if (productPrice > 35) {
    shipping = 4.99;
  } else if (productPrice > 15) {
    shipping = 12.99;
  } else if (productPrice > 0) {
    shipping = 19.99;
  } else {
    shipping = 0;
  }

  const tax = productPrice / 10;

  const total = productPrice + shipping + tax;

  const handlePlaceOrder = () => {
    console.log(cart.length)
    if(cart.length !== 0){
      clearTheCart();
      props.setProducts([]);
      props.setOrderPlaced(true);
      props.setShowImage(true)
    }
  }

  return (
    <div className="cart-container">
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      <p style={{ textAlign: "center" }}>Items ordered: {cart.length}</p>
      <table>
        <tbody>
          <tr>
            <td>Items:</td>
            <td>${handleNumber(productPrice)}</td>
          </tr>
          <tr>
            <td>Shipping ans Handling:</td>
            <td>${handleNumber(shipping)}</td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td>${handleNumber(tax)}</td>
          </tr>
          <tr className="order-total">
            <td>Order Total:</td>
            <td>${handleNumber(total)}</td>
          </tr>
        </tbody>
      </table>
      <br />
      {props.showReviewButton ? (
        <Link to="/order">
          <button className="main-button">Review Cart</button>
        </Link>
      ) : (
        <button className="main-button" onClick={handlePlaceOrder}>Place Order</button>
      )}
    </div>
  );
};

export default Cart;
