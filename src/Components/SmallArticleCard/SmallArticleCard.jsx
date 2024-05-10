import React from 'react';
import styles from './SmallArticleCard.module.css'; 

function SmallArticleCard({ imageSrc, title, description }) {
  return (
    <div className={styles.articleCardSm}> 
      <div className={styles.articleImgSm}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.articleInfoSm}>
        <div className={styles.articleDetailsSm}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallArticleCard;
