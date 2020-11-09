import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../assets/images/zapper new.jpg'
import banner2 from '../assets/images/SLIDE 2.jpg'
import banner3 from '../assets/images/SLIDE 3.jpg'


export default function Slider() {
    return (
        <div >
             <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={9000} showThumbs={false} >
                <div>
                    <img src={banner1}  />
                   
                   
                </div>
                <div>
                    <img src={banner2}  />
                    {/* <p className="legend">
                        India No.1 Virus Killing Product
                    </p>
                     */}
                   
                </div>
                <div>
                    <img src={banner3}  />
                    
                    
                </div>
               
            </Carousel>
        </div>
    )
}
