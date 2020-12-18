import React from 'react'
import {useHistory,Link} from 'react-router-dom'
 import emailjs from 'emailjs-com'

export default function ShippingAddress() {

    const orderNow = (e)=>{
        e.preventDefault()
        //  emailjs
        //  .sendForm(
        //      "service_chmdw4o",
        //      "template_zfyju9d",
        //      "contact-from-class",
        //      "indian-zapper"

        //  )
        window.location.replace('https://imjo.in/tqmteQ')

    }
    return (
        <div className='container'>
             <div className='form-add'>
          <h2 className='text-center'>Shipping Address</h2>
          <form  onSubmit={orderNow} className='contact-from-class'>
            <div class="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input
                type="text"
                class="form-control"
                required
              />
            
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                required
              />
              <div class="form-group">
              <label for="exampleInputEmail1">mobile</label>
              <input
                type="mobile"
                class="form-control"
                required
              />
            
            </div>
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Address Line 1</label>
              <input
                type="text"
                class="form-control"
                required
              />
            
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Address Line 2</label>
              <input
                type="text"
                class="form-control"
                required
              />
            
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">City</label>
              <input
                type="text"
                class="form-control"
                required
              />
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">State.</label>
              <input
                type="text"
                class="form-control"
                required
              />
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Pin Code</label>
              <input
                type="text"
                class="form-control"
                required
              />
            
            </div>


           

            <input type="submit" value='Order Now' class="btn btn-primary" />
            
            
          </form>
       
        </div>
        </div>
    )
}
