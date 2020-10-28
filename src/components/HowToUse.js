import React from 'react'
import '../assets/css/how-to-use.css'
import proImg1 from '../assets/images/how-to-use-img1.jpg'
import proImg2 from '../assets/images/how-to-use-img2.jpg'
import proImg3 from '../assets/images/how-to-use-img3.jpg'



export default function HowToUse() {
    return (
        <div className='how-to-use'>
            <h2>How to use Our Product</h2>
            <div className='p-use'>
                <div>
                <p className='step'>Step 1</p>
                    <p className='how'>How to Use</p>
                    <img src={proImg1} alt='pro-image' width='100%' />
                    
                </div>
                
                <div>
                <p className='step'>Step 2</p>
                <p className='how'>How to Use</p>
                    <img src={proImg2} alt='pro-image' width='100%' />
                    </div>
                <div>
                <p className='step'>Step 3</p>
                <p className='how'>How to Use</p>
                    <img src={proImg3} alt='pro-image' width='100%' />
                </div>

                
                
            </div>
        </div>
    )
}
