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
                    <h2>Sri Vedic Pratisthan</h2>
                    <p>
             Sri Vedic Pratisthan 
             We have faith in "Fix Yourself" where a patient can assist themselves with their own endeavors by following the Cleansing Therapy. It encourages you to deal with your wellbeing where you let the body's characteristic working accomplish its work and eliminate the obstructions that upset it.
             </p>
               
                </div>

            </div>
            
          
        </div>
    )
}
