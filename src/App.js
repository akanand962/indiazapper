import React ,{useState,useEffect} from 'react';
import firebase from './firebase'

import Home from './components/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import OurProduct from './components/OurProduct';
import HowToUse from './components/HowToUse';
import Contact from './components/Contact';
import ShippingAddress from './components/ShippingAddress';
import Order from './components/Order';
import PrivacyPolicy from './components/PrivacyPolicy'
import Term from './components/Term'
import RefundPolicy from './components/RefundPolicy'
import {Helmet} from "react-helmet";

function App() {
  const [menu,setMenu] = useState(false)
 const [load, setLoad] = useState(false)

  const togglMenu  = ()=>{
      setMenu(!menu)
  }
  const show = menu?'show':''

  useEffect(()=>{
    // Notification.requestPermission().then(function(permission) { 
    //   if (permission === "granted") {
    //     var notification = new Notification("Hi there!");
    //   }
    
    // });
     const messaging = firebase.messaging()
     messaging.requestPermission().then(()=>{
       return messaging.getToken()
     }).then(token=>{
       console.log('token',token)
     }).catch(e=>{
       console.log(e)
     })
   
 
    
  },[])
  return (
    <div className='App'>
       <Helmet>
      <title>Herbal Parasite Cleanse Zapper Delhi|Mumbai| Bangalore| India</title>
      </Helmet>
<Router>
<Header/>

<Switch>
<Route path='/' exact component={Home}/>
<Route path='/about' exact component={About}/>
<Route path='/our-product' exact component={OurProduct}/>

<Route path='/how-to-use' exact component={HowToUse}/>
<Route path='/order' exact component={Order}/>
<Route path='/shipping-address' exact component={ShippingAddress}/>
<Route path='/privacy-policy' exact component={PrivacyPolicy}/>
<Route path='/term-condition' exact component={Term}/>
<Route path='/refund-policy' exact component={RefundPolicy}/>



<Route path='/contact-us' exact component={Contact}/>


</Switch>

<Footer/>
</Router>
    </div>
   
  );
}

export default App;
