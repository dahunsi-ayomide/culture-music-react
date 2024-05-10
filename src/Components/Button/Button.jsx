import React from 'react';
import styles from './Button.module.css'; 

function Button({ children, className }) {
  return (
    <button className={`${styles.CTA} ${className}`}>
      {children}
    </button>
  );
}

export default Button;

