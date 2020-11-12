import React from "react";

import "../assets/css/order.css";
import pro from "../assets/images/product-buy1.jpg";
import {Instamojo} from 'instamojo-nodejs'
import {axios} from 'axios'
import { Redirect,useHistory } from "react-router-dom";

export default function Contact() {
    const history = useHistory()

    const order = ()=>{
        alert(' Your Order Successfully  ')
        history.push('/')
        
    }
    const buyNow = ()=>{
     
      window.location.replace('https://test.instamojo.com/@dev_akhilesh90')
  
  
    }
  return (
    <div className="container">
      <div>
        <div className="prod-des">
          <div>
            <img src={pro} alt="product-image" width="100%"  />
           
          </div>
          <div className='price'>
              <p>Sri Vedic Pratisthan :- INDIAN ZAPPER DELUX <br/>
                ( Pulsar + Zapper + Colloidal Silver (3 IN 1) for 3200+ Body Parasites Cleanser.</p>
            <strong className="pre-amount"> Rs:19999</strong>
            <strong className="amount">Offer Rs:9999</strong>
            <p>Generally delivered in 5 - 9 days</p>
            <p></p>
            <button className='btn btn-success' onClick={buyNow}>BUY NOW</button>
          </div>
        </div>

       
      </div>

      {/* <div className='form-add'>
          <h2 className='text-center'>Shipping Address</h2>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input
                type="text"
                class="form-control"
            
              />
            
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
               
              />
              <div class="form-group">
              <label for="exampleInputEmail1">mobile</label>
              <input
                type="mobile"
                class="form-control"
               
              />
            
            </div>
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Address Line 1</label>
              <input
                type="text"
                class="form-control"
               
              />
            
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Address Line 2</label>
              <input
                type="text"
                class="form-control"
               
              />
            
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">City</label>
              <input
                type="text"
                class="form-control"
               
              />
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">State.</label>
              <input
                type="text"
                class="form-control"
               
              />
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Pin Code</label>
              <input
                type="text"
                class="form-control"
               
              />
            
            </div>


           

            <button type="submit" class="btn btn-primary" onClick={order}>
              Submit
            </button>
          </form>
       
        </div>
    */}
    </div>
 
 
 );
}
