import React from 'react'
import '../assets/css/footer.css';

export default function Footer() {
    return (
        <div className='main-footer'>
            <div className='container footer'>
            <div className='f-div'>
            <h3>Connect with Us</h3>
             <p>161B-Basement ,Gujjar Dairy,Gautom Nagar 
                New Delhi-110049</p>
            
        <a className="nav-link text-white fa fa-mobile" href="#"> 7290053590</a>
        <a className="nav-link text-white fa fa-phone" href="#"> 011-47385182/69</a>
        <a className="nav-link text-white fa fa-email" href="#"> Email:- vedic1804@gmail.com</a>



          </div>
          <div className='f-div'>
             <h3>Get to Know Us</h3>
             <p>About us</p>
             <p>Contact us</p>
             <p>New Offers</p>



          </div>
          <div className='f-div'>
             <h3>Connect with Us</h3>
             <a className="nav-link text-white fa fa-facebook" href="#"></a>
             <a className="nav-link text-white fa fa-instagram" href="#"></a>
           <a className="nav-link text-white fa fa-youtube" href="#"></a>



          </div>
          <div className='f-div'>
          <h3>Connect with Us</h3>
             <p>Term And Condition</p>
             <p>Refund Policy</p>
             <p>Track Your Order</p>

          </div>
        </div>
          <div className='copy-write'>
              <p style={{textAlign:"center"}}>Copyright © 2020 Sri Vedic Pratisthan, All Rights Reserved.</p>
          </div>
         
        </div>
    )
}
