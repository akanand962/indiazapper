import React from "react";
import "../assets/css/home.css";
import {Link} from 'react-router-dom'
import img1 from "../assets/images/ourpro2.jpg";
import img2 from "../assets/images/ourpro.jpg";
import img3 from "../assets/images/ourpro1.jpg";
import productImage from "../assets/images/zapper new.jpg";
import Carousel from "react-elastic-carousel";
import Slider from './Slider'
 import Testimonial from "./Testimonial";
 



export default function Home() {
  return (
    <div>
      {/* <p className="p-function">Function of Product</p> */}
      <Slider/>
      <section className="container  about-product">
        <div className="card">
          <img src={img1} class="card-img-top" alt="product-image" />
         
        </div>
        <div className="card">
        <a href='https://www.srivedicpratisthan.com/' >
          <img src={img2} class="card-img-top" alt="product-image" />
          </a>
         
        </div>
        <div className="card card-1">
          <img src={img3} class="card-img-top" alt="product-image" />

         
        </div>
      </section>

      <section className="container">
        <div className='p-name'>
        <p className="p-name">Product</p>
        </div>
        

        <div className="product">
          <img src={productImage} className="p-image" alt={productImage} />
          <button className=" btn btn-success buy-product">BUY NOW</button>
        </div>
      </section>
      {/* Product description  start*/}
      <section className="pro-des">

        <div className="des-title"><p>Product Descrip</p></div>
         
        <div className="container pro-dess">
         <div className='des-div'>
        <img src={img1} class="card-img-top" alt="product-image" width='300px' height='300px' />

         </div>

         <div className='des-div'>
         <p>
            Parasite Cleanse With Pulsar Pulsar is a strong medium to kill
            parasites. It is used to mobilize lymph systems and ill pathogens
            (parasites, bacteria, virus, fungi, yeast etc.) hidden in the body.
            Pulsar kills the parasites living your body with the help of
            magnetic pulse.
          </p>
          <button className='btn btn-success text-center'><Link className='link-btn' to='how-to-use'>Read More...</Link></button>
         </div>
          
         
         
          
        </div>
      </section>
      {/* Product description  end*/}

      {/* How to use Product  Start*/}
      <section >
      <div className='p-des'>
        <div className="use-title"> <p>How to Use Product</p></div>
     
      </div>

        <div className="container how-use">
         <div className='use-div'>
        <img src={img1} class="card-img-top" alt="product-image" width='300px' height='300px' />

         </div>

         <div className='use-div'>
         <p>
          
            Parasite Cleanse With Pulsar Pulsar is a strong medium to kill
            parasites. It is used to mobilize lymph systems and ill pathogens
            (parasites, bacteria, virus, fungi, yeast etc.) hidden in the body.
            Pulsar kills the parasites living your body with the help of
            magnetic pulse.
          </p>
          <button className='btn btn-success text-center'> <Link className='link-btn' to='how-to-use'>Read More...</Link></button>
         </div>
        
          
        </div>
      </section>

      {/* How to use Product  end*/}
      <h1 className='client'>Our Clients </h1>
      <section className=" client-slider">
      
      <Testimonial/>
      </section>
    
    </div>
  );
}
