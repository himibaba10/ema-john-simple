import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Shop from "./components/Shop/Shop";

function App() {

  const [products, setProducts] = useState([]);

  return (
    <div className="App.css">
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop products={products} setProducts={setProducts}/>}/>
        <Route path="/order" element={<Order products={products} setProducts={setProducts} />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route exact path="/" element={<Shop  products={products} setProducts={setProducts}/>} />
        <Route path="/product/:productKey" element={<ProductDetails products={products}/>}>
          <Route path="seeOrder" element={<Order products={products} setProducts={setProducts}/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
