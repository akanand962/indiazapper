import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";


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
       
       
          <div className='contact-info'>
          <a className="nav-link text-white fa fa-mobile" href="tel:7290053590"> 7290053590</a>
        <a className="nav-link text-white fa fa-phone" href="tel:011-47385182/69"> 011-47385182/69</a>
        <a className="nav-link text-white fa fa-email" href="mailto:vedic1804@gmail.com"> vedic1804@gmail.com</a>
        <a className="nav-link text-white fa fa-email" href="https://www.delhivery.com/"> Track Your Order</a>
          </div>
         
          <div id="google_translate_element" class="col-md-2">
     
            </div>
         
          <div className="social-icon">
            <a className="nav-link text-white fa fa-facebook"  target="_blank" href="https://www.facebook.com/indianzapperdelux"></a>
            <a className="nav-link text-white fa fa-instagram" target="_blank" href="https://www.instagram.com/"></a>
            <a className="nav-link text-white fa fa-youtube" target="_blank" href="youtube.com"></a>
          </div>
        </div>
      </nav>

     
     
      <nav className=" navbar navbar-expand-lg navbar-light bg-light ">
       
        <Link className="navbar-brand" to="/">
          <img src= {process.env.PUBLIC_URL + '/logo.png'}  alt='logo' width='13%' height='13%'/>
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
            <Link className="nav-link active text-white " text-seccess to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
            <Link className="nav-link text-white " to="/our-product">
              Our Product
            </Link>
            <Link className="nav-link text-white" to="/how-to-use">
              How to Use
            </Link>
            {/* <Link className="nav-link text-white" to='/contact-us'>Contact us</Link> */}
            <Link className="nav-link text-white buynow" to="/order">
              BUY NOW
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
