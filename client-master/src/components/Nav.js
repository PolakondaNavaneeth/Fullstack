import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "../components/ContextReducer";
import "../css/Nav.css"; // Import the CSS file for custom styles

function Nav() {
  let data = useCart();
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authtoken");
  const [cartView, setCartView] = useState(false);
 

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            
            {authToken && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/myorders">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          {!authToken ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">
                Signup
              </Link>
            </div>
          ) : (
            <>
              <div
                className="btn bg-white text-success mx-2"
                onClick={() => {
                  setCartView(true);
                }}
              >
                My Cart {"  "}
                <Badge bg="danger">{data.length}</Badge>
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              ) : null}
              <div
                className="btn bg-white text-danger mx-2"
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
