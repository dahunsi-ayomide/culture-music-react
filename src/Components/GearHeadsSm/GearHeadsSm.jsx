import React from 'react';
import SmallArticleCard from '../SmallArticleCard/SmallArticleCard.jsx';
import styles from './GearHeadsSm.module.css'
import ArticleImage1 from '../../assets/unsplash_7l8b8bBVQbM.png' 
import ArticleImage2 from '../../assets/unsplash_OwMIhcZu_X8.png' 
import ArticleImage3 from '../../assets/unsplash_OwMIhcZu_X8article.png' 




function GearHeadsSm () {
  return (
    <section className={styles.gearCtn2}>
        
      <div className={styles.articleCtn}>
        <SmallArticleCard 
        imageSrc={ArticleImage1}
        title= "The Art of Drumming: Exploring Rhythms, and Cultural Significance"
        description= "Discover the rich history and cultural significance of drumming traditions worldwide."
        />
        <SmallArticleCard
        imageSrc={ArticleImage2}
        title= "The Impact of Drums on Modern and Classical Music"
        description= "Discover how drums have revolutionized modern music, driving rhythms from modern to classic music"
        />
         <SmallArticleCard
        imageSrc={ArticleImage3}
        title= "Drumming Legends: Icons of the Drum Kit and Their Legacy"
        description= "Celebrate the drumming legends who have left an indelible mark on the world of music."
        />
      </div>
    </section>
  );
}

export default GearHeadsSm;