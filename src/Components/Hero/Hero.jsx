import React from 'react';
import Nav from '../Nav/Nav.jsx'; 
import styles from './Hero.module.css';


function Hero() {
  return (
  
    <div className={styles.hero}>  
      <h1 className={styles.heroTitle}>Fulfilling dreams <br/> Where Beats <br/> Meet Brilliance</h1> 
      <Nav/> 
    </div>
  );
}

export default Hero;
