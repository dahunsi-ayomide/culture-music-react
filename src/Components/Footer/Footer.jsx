import React from 'react';
import styles from './Footer.module.css'; 
import logoImg from '../../assets/Frame 52.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftColumn}>
        <div className={styles.myAccount}>
          <strong>My Account</strong>
          <a href="#">Overview</a>
          <a href="#">Order History</a>
          <a href="#">Wishlist</a>
          <a href="#">Account Information</a>
        </div>

        <div className={styles.store}>
          <div className={styles.footerHeader}>
            <strong>Store</strong>
          </div>
          <a href="#">Security Notice</a>
          <a href="#">Location & Hours</a>
          <a href="#">Rentals</a>
          <a href="#">Privacy Notice</a>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.logo}>
          <a href="#">
          <img src={logoImg} className={styles.logoImg} alt="Logo" />
          </a>
        </div>

        <div className={styles.socialIcons}>
          <a href="#" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
