import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard.jsx';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import styles from './GearHeads.module.css'

import ArticleImage1 from '../../assets/unsplash_EM0ieRDAoOs.png' 
import ArticleImage2 from '../../assets/unsplash_EM0ieRDAoOsblue.png' 



function GearHeads () {
  return (
    <section className={styles.gearCtn}>
      <SectionHeader
      title="Gear Heads"
      />
      <div className={styles.articleCtn}>
        <ArticleCard 
        imageSrc={ArticleImage1}
        title= "The Evolution of Drum Sets: From Jazz to Metal and Beyond"
        description= "Explore the evolution of drum sets, tracing their development across various music genres from jazz to metal and beyond."
        />
        <ArticleCard
        imageSrc={ArticleImage2}
        title= "Unleashing the Power of Percussion: A Journey Through Drumming Traditions"
        description= "Embark on a cultural journey through the diverse traditions of drumming, uncovering their significance across different cultures."

        />
      </div>
    </section>
  );
}

export default GearHeads;