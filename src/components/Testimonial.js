import React from 'react'
 import Carousel from "react-elastic-carousel";
import Item from './Item'
import img2 from "../assets/images/zapper img3.png";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
export default function Testimonial() {
    return (
        <> 
        
        <Carousel breakPoints={breakPoints}>
           <Item className='main'>
           <img src={img2} alt='' width='50px' height='50px' className='client-image'/>
           <strong>Rajesh</strong>

              <p>
                  <q className='qut'>
                  &nbsp;&nbsp; Every good company wants to provide excellent customer service, but it’s not always easy to balance that with other business needs and goals.&nbsp;&nbsp;
                  </q>
                  </p>
           </Item>
            <Item className='main'>
           <img src={img2} alt='' width='50px' height='50px' className='client-image'/>
           <strong> Akhilesh</strong>
              <p>
                  <q className='qut'>
                  &nbsp;&nbsp; Every good company wants to provide excellent customer service, but it’s not always easy to balance that with other business needs and goals. &nbsp;&nbsp;
                  </q>
                  </p>
           </Item>
           <Item className='main'>
           <img src={img2} alt='' width='50px' height='50px' className='client-image'/>
           <strong>Vijay</strong>

              <p>
                  <q className='qut'>
                  &nbsp;&nbsp; Every good company wants to provide excellent customer service, but it’s not always easy to balance that with other business needs and goals. &nbsp;&nbsp;
                  </q>
                  </p>
           </Item>
            <Item className='main'>
           <img src={img2} alt='' width='50px' height='50px' className='client-image'/>
           <strong>Vijay</strong>

              <p>
                  <q className='qut'>
                  &nbsp;&nbsp; Every good company wants to provide excellent customer service, but it’s not always easy to balance that with other business needs and goals. &nbsp;&nbsp;
                  </q>
                  </p>
           </Item>
          
        </Carousel>
    </>
    )
}
