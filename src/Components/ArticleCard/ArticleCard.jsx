import React from 'react';
import styles from './ArticleCard.module.css'; 

function ArticleCard({ imageSrc, title, description }) {
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleImg}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.articleInfo}>
        <div className={styles.articleDetails}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
