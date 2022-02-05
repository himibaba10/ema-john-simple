import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import fakeData from "../../resources/fakeData/products.JSON";
import Product from "../Product/Product";
import "./ProductDetails.css";
const ProductDetails = () => {

  const [checkCart, setCheckCart] = useState(false);

  const { productKey } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  const product = products.find((pd) => pd.key === productKey);


  return product ? (
    <div>
      <h1>Product detail</h1>
      {product && <Product productDetails={true} product={product} />}
        {
          checkCart !== true ? (<Link to={window.location.pathname + "/seeOrder"}><button className="main-button" onClick={() => setCheckCart(!checkCart)}>Check Cart Here</button></Link>) : (<Link to={"/product/"+productKey}><button className="main-button" onClick={() => setCheckCart(!checkCart)}>Remove Cart</button></Link>)
        }
      <Outlet/>
    </div>
  ) : (
    setTimeout(() => {
      <div className="product-not-available">
        <h1>The product you are finding, is not available</h1>
        <p>Or maybe you wrote a wrong product key</p>
      </div>;
    }, 500)
  );
};

export default ProductDetails;
