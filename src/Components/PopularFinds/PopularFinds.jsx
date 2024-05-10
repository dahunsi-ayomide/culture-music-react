import React from 'react';
import ProductCard from "../ProductCard/ProductCard.jsx";
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import styles from './PopularFinds.module.css';
import CardImage1 from '../../assets/image 9.png'
import CardImage2 from '../../assets/image 9-1.png'
import CardImage3 from '../../assets/image 9-2.png'
function PopularFinds() {
  return (
    <div className={styles.popularfindsCtn}>
      <SectionHeader
      title="PopularFinds"
      />
    <div className={styles.productCtn}>
      <ProductCard
        image={CardImage1} 
        alt="drum sticks"
        productName="Vic Firth 5A Drumsticks"
        price="$9.99"
        description="The Vic Firth American Classic 5A drumsticks are a popular choice among drummers worldwide. Made from hickory, suitable for various playing styles and genres"
      />
      <ProductCard
        image={CardImage2} 
        alt="drum sticks"
        productName="Tama SLP Snare Drum"
        price=" $599.99"
        description="The Tama SLP Dynamic Bronze snare drum combines a bronze shell with die-cast hoops, offering a rich and warm sound with excellent sensitivity and articulation."
      />
      <ProductCard
        image={CardImage3} 
        alt="drum sticks"
        productName="Ludwig Snare Drum"
        price="$449.99"
        description="The Ludwig Supraphonic LM402 snare drum is a legendary classic, featuring a seamless aluminum shell that produces a bright and lively sound with a balanced tone. "
      />
    </div>
    </div>
  )
}

export default PopularFinds;