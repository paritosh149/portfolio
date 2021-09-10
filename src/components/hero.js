import React, {useEffect} from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => {
  useEffect(()=> {
    const t = setTimeout(()=>console.log("Date Time", new Date())
      , 1000);
      return ()=>{
        console.log("Clear Timeout");
        clearTimeout(t);
      }
    }, []);
  return (
      <div className={styles.hero}>
        <Img
          className={styles.heroImage}
          alt={data.name}
          fluid={data.heroImage.fluid}
        />
        <div className={styles.heroDetails}>
          <h3 className={styles.heroHeadline}>{data.name}</h3>
          <p className={styles.heroTitle}>{data.title}</p>
          <p>{data.shortBio.shortBio}</p>
        </div>
      </div>
    )
  }
