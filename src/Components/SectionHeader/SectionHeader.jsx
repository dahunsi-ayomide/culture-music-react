import React from 'react';
import styles from './SectionHeader.module.css'; 

function SectionHeader({ title }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.rectangle}></div>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader;



