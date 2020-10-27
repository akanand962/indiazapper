import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import logo from '../assets/images/logo.png'

export default function Header() {
  const [menu, setMenu] = useState(false);

  const togglMenu = () => {
    setMenu(!menu);
  };
  const show = menu ? "show" : "";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container main-div ">
          <div>
            <button className="order-btn"> Order Now 1234567890</button>
          </div>
          <div className="navbar-nav track-order">
            <a className="nav-link text-white" href="https://www.delhivery.com/">
              Track Your Order
            </a>
            <a className="nav-link text-white " href="#">
              English
            </a>
          </div>
          <div className="social-icon">
            <a className="nav-link text-white fa fa-facebook" href="#"></a>
            <a className="nav-link text-white fa fa-instagram" href="#"></a>
            <a className="nav-link text-white fa fa-youtube" href="#"></a>
          </div>
        </div>
      </nav>

     
     
      <nav className=" navbar navbar-expand-lg navbar-light bg-light ">
       
        <Link className="navbar-brand" to="/indiazapper">
          <img src={logo}  alt='logo' width='13%' height='13%'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={togglMenu}
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className={"collapse navbar-collapse" + show}> */}
        <div className={"collapse navbar-collapse  " + show}>
          <div className="navbar-nav ml-auto ">
            <Link className="nav-link active" text-seccess to="/indiazapper">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link className="nav-link text-dark" to="/about">
              About
            </Link>
            <Link className="nav-link text-dark " to="/our-product">
              Our Product
            </Link>
            <Link className="nav-link text-dark" to="/how-to-use">
              How to Use
            </Link>
            {/* <Link className="nav-link text-white" to='/contact-us'>Contact us</Link> */}
            <Link className="nav-link text-dark buynow" to="/contact-us">
              BUY NOW
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
