import React from 'react';
import styles from './Ad.module.css'; 
import Button from '../Button/Button.jsx'; 

function Ad() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.ad}>
        <h2>FREE DRUM LESSONS!</h2>
        <p>Purchase any drum over $499.99 and receive a one-hour drum lesson free</p>
        <Button className="CTA">Learn More</Button> 
      </div>
    </section>
  );
}

export default Ad;
