import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg Poppins-font " >
        <div className="container-fluid" >
            
            <div className="brand-detail">

          <a class="navbar-brand" href="/">
            <img
              src={require("../Asset/logo.png")}
              alt="Logo"
              width="39"
              height="39"
              class="d-inline-block align-text-top"
            />
          </a>
          <a class="navbar-brand brand-name" href="/">Alpha Fitness</a>
            </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup"  >
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Exercise
              </a>
              <a className="nav-link" href="/">
                About
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
