import React from 'react'
import Hero from "./Components/Hero/Hero.jsx"; 
import Ad from "./Components/Ad/Ad.jsx"; 
import NewProducts from "./Components/NewProducts/NewProducts.jsx"; 
import PopularFinds from './Components/PopularFinds/PopularFinds.jsx';
import GearHeads from "./Components/GearHeads/GearHeads.jsx";
import GearHeadsSm from './Components/GearHeadsSm/GearHeadsSm.jsx';
import Footer from './Components/Footer/Footer.jsx';
function App() {
  const products = [
    {
      id: 1,
      image: 'Images/Card/Card/image 1.png',
      alt: 'drum sticks',
      productName: 'Product Name 1',
      price: '$2500',
      description: 'Product description here',
    }
  ];



  return (
    <div className="App">
      <Hero /> 
      <Ad /> 
      <NewProducts products={products} /> 
      <PopularFinds/> 
      <GearHeads />
      <GearHeadsSm />
      <Footer/>

     
    </div>
  );
}

export default App;
