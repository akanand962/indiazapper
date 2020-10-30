import React ,{useState} from 'react';

import Home from './components/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import OurProduct from './components/OurProduct';
import HowToUse from './components/HowToUse';
import Contact from './components/Contact';



function App() {
  const [menu,setMenu] = useState(false)

  const togglMenu  = ()=>{
      setMenu(!menu)
  }
  const show = menu?'show':''
  return (
    <div className='App'>
<Router>
<Header/>

<Switch>
<Route path='/indiazapper' exact component={Home}/>
<Route path='/about' exact component={About}/>
<Route path='/our-product' exact component={OurProduct}/>

<Route path='/how-to-use' exact component={HowToUse}/>
<Route path='/contact-us' exact component={Contact}/>


</Switch>

<Footer/>
</Router>
    </div>
   
  );
}

export default App;
