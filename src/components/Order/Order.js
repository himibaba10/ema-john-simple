import React, { useState } from "react";
import happyFace from "../../resources/images/giphy.gif";
import { deleteFromDb, getStoredCart } from "../../resources/utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Order = (props) => {
  const cart = getStoredCart();
  const cartItems = Object.keys(cart);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const cartProducts = cartItems.map((key) => {
    return props.products.find((pd) => pd.key === key);
  });

  cartProducts.map((pd) => pd && (pd.quantity = cart[pd.key]));
  const totalQuantity = cartProducts.reduce(
    (total, pd) => total + pd?.quantity,
    0
  );

  const handleRemoveProduct = (productKey) => {
    props.setProducts(cartProducts.filter((pd) => pd.key !== productKey));
    deleteFromDb(productKey);
  };

  return (
    <div className="order-container">
      <div className="review-section">
        {orderPlaced !== true && <h1>Total Quantity: {totalQuantity} </h1>}
        {cartProducts.map(
          (product) =>
            product && (
              <Product
                handleRemoveProduct={handleRemoveProduct}
                product={product}
                removeButton={true}
              />
            )
        )}
        {showImage === false && cartProducts.length === 0 && (
          <h1>You haven't ordered anything yet</h1>
        )}
        {showImage === true && <img src={happyFace} alt=""></img>}
      </div>
      <div style={{ marginRight: "50px" }}>
        <Cart
          products={props.products}
          setProducts={props.setProducts}
          orderPlaced={orderPlaced}
          setOrderPlaced={setOrderPlaced}
          setShowImage={setShowImage}
        />
      </div>
    </div>
  );
};

export default Order;
