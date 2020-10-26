import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../assets/zapper new.jpg'

export default function Slider() {
    return (
        <div>
             <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} >
                <div>
                    <img src={banner1}  />
                   
                </div>
                <div>
                    <img src={banner1}  />
                   
                </div>
                <div>
                    <img src={banner1}  />
                   
                </div>
               
            </Carousel>
        </div>
    )
}
