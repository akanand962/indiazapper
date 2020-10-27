import React from "react";
import {useHistory} from 'react-router-dom'
import "../assets/css/order.css";
import pro from "../assets/images/product3.jpg";

export default function Contact() {
    const history = useHistory()

    const order = ()=>{
        alert(' Your Orderv Successfully  ')
        history.push('/')
        
    }
  return (
    <div className="container">
      <div className="shiping-address">
        <div className="prod-des">
          <div>
            <img src={pro} alt="product-image" width="100%" height="50%" />
           
          </div>
          <div className='price'>
              <p>Sri Vedic Pratisthan :- INDIA ZAPPER DELUX ( Pulsar + Zapper + Colloidal Silver (3 IN 1) for 3200+ Body Parasites Cleanser.</p>
            <strong className="pre-amount"> Rs:19999</strong>
            <strong className="amount">Offer Rs:9999</strong>
            <p>Generally delivered in 5 - 9 days</p>
            <p></p>
          </div>
        </div>

        <div>
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
      </div>
    </div>
 
 
 );
}
