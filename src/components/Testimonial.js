import React from 'react'
 import Carousel from "react-elastic-carousel";
import Item from './Item'
import img2 from "../assets/images/Geeta.jpg";
import img3 from "../assets/images/JPG VIJAY.jpg";



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
           <strong>Geeta</strong>

              <p>
                  <q className='qut'>
                  &nbsp;&nbsp; It's a great experience!!! after using the "INDIAN PULSAR DELUXE &  COLLOIDAL SILVER"  my energy level has been increased, also my immunity is strong. Thanking You.&nbsp;&nbsp;
                  </q>
                  </p>
           </Item>
            <Item className='main'>
           <img src={img3} alt='' width='50px' height='50px' className='client-image'/>
           <strong> Vijay Mondal</strong>
              <p>
                  <q className='qut'>
                  &nbsp;&nbsp; इंडियन जैपर डीलक्स से शरीर को *जैप करने और कोलॉइडल सिल्वर पानी* पीने से मेरे शरीर में मानो ग़ज़ब की स्फूर्ति आयी है जिसके कारण मैं रोजाना नयी ताज़गी महसूस करता हूँ।  बैक्टीरिया वायरस फंगस वर्म जैसी चीजे तो मुझसे अब कोसों दूर रहती है. &nbsp;&nbsp;
                  </q>
                  </p>
           </Item>
          
           
          
        </Carousel>
    </>
    )
}
