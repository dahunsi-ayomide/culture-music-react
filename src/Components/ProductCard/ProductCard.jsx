import React from 'react';
import styles from './ProductCard.module.css'; 

function ProductCard({ image, alt, productName, price, description, addToCart }) {
  const handleAddToCart = () => {
    addToCart(productName);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.cardImg}>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.namePrice}>
          <h3>{productName}</h3>
          <h3>{price}</h3>
        </div>
        <p>{description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

