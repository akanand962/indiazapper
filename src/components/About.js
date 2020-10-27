import React from 'react'
import '../assets/css/about.css'
import  aboutImage from '../assets/images/3.jpg'

export default function About() {
    return (
        <div>
            <div className='about'>
            <h1>About us</h1>
            </div>
            <div className='about-des'>
                <div className='img-div'>
                    <img src={aboutImage} alt='about image' width='100%' height='100%'  />
                </div>
                <div className='img-div'>
                    <h2>Sri Vedic Pratisthan, Gautam Nagar</h2>
                    <p>
             Sri Vedic Pratisthan in Gautam Nagar,
            Delhi is a top player in the category Rudraksha Mala Dealers in the Delhi.
              This well-known establishment acts as a one-stop</p>
               
                </div>

            </div>
            
          
        </div>
    )
}
