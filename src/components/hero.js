import React, {useEffect, useRef, useState} from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();
  
  function callback(){
    console.log("In callback at ", new Date());
    setCount(count + 1);
  }
  
  useEffect(()=>{
    savedCallback.current = callback;
  });
  
  useEffect(()=>{
  function tick(){
    savedCallback.current();
  }
  let t = setInterval(tick, 1000);
  return ()=>clearInterval(t)
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
