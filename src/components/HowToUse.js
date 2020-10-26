import React from 'react'
import '../assets/how-to-use.css'
import proImg1 from '../assets/product3.jpg'
import proImg2 from '../assets/product2.png'


export default function HowToUse() {
    return (
        <div className='how-to-use'>
            <h2>How to use Our Product</h2>
            <div className='p-use'>
                <div>
                    <img src={proImg1} alt='pro-image' width='60%' height='50%'/>
                </div>
                <div>First Step</div>
                <div><img src={proImg2} alt='pro-image' width='60%' height='50%' /></div>
                <div>Second step</div>
            </div>
        </div>
    )
}
