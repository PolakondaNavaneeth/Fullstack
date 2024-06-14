import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
//import Cart from './screens/Cart'
import MyOrder from "./screens/MyOrder";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


// import ProductDetails from './components/ProductDetails'
//import '../node_modules/react-bootstrap/dist/react-bootstrap'
export default function App() {
 
  
  return (

      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} prozz />
              <Route path="/signup" element={<Signup />} />
              <Route path="/myorders" element={<MyOrder />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>

  );
}
