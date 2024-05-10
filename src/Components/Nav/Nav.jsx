import React from 'react';
import styles from './Nav.module.css';
import logoImg from '../../assets/Frame 52.png';
import Cart from '../../assets/Vector.svg';
import Profile from '../../assets/Profile.svg';
import Hamburger from '../../assets/Hamburger.svg'; // Add Hamburger icon

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <a href="#">
            <img src={logoImg} className={styles.logoImg} alt="Logo" />
          </a>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.showNavLinks : ''}`}> {/* Conditionally apply 'showNavLinks' class */}
          <li>
            <a href="#">Drums</a>
          </li>
          <li>
            <a href="#">New Products</a>
          </li>
          <li>
            <a href="#">Popular Finds</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
  
        </ul>
        <div className={styles.navIcons}>
          <a href="#">
            <img src={Cart} alt="" />
          </a>
          <a href="#">
            <img src={Profile} alt="" />
          </a>
          {/* Always show hamburger button on smaller screens */}
          <button className={styles.hamburgerBtn} onClick={toggleMenu}>
            <img src={Hamburger} alt="Menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
