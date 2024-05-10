import React from 'react';
import ProductCard from "../ProductCard/ProductCard.jsx";
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import styles from './NewProducts.module.css';
import CardImage1 from '../../assets/Card/image 1.png'
import CardImage2 from '../../assets/Card/image 6.png'
import CardImage3 from '../../assets/Card/image 8.png'

function NewProducts() {
  return (
    <div className={styles.newproductCtn}>
      <SectionHeader
      title="New Products"
      />
    <div className={styles.productCtn}>
      <ProductCard
        image={CardImage1}
        alt="drum sticks"
        productName="Pearl Sensitone Snare Drum"
        price="$499.99"
        description="This snare drum from Pearl offers a classic brass sound with a beaded brass shell, delivering a warm and resonant tone."
      />
      <ProductCard
        image={CardImage2}
        alt="drum sticks"
        productName="DW Collector's Snare Drum"
        price="$799.99"
        description="The DW Collector's Series snare drum boasts a black nickel over brass shell, providing a versatile sound."
      />
      <ProductCard
        image={CardImage3}
        alt="drum sticks"
        productName="Mapex Snare Drum"
        price="$349.99"
        description="The Mapex Black Panther Brass Cat snare drum features a brass shell, enhancing its projection and resonance."
      />
    </div>
    </div>
  )
}

export default NewProducts;
