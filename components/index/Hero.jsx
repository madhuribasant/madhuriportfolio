import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {useState ,useEffect } from 'react'

export const Hero = () => {

  const text = "graphicsdesigner"
  const [index ,setIndex] = useState(0)
  const [reload ,setReload]  = useState(false)
  useEffect(() => {
    
    if (reload) {
      
      setTimeout(() => {
        
        if (index===text.length) {
           setIndex(0)
          }
          else{
            setIndex(++index)
            
          }

          setReload(false)
      }, 300);
    }

    else{
      setReload(true)
    }

  }, [reload])
  


  return (
    <>
       <section className={styles.hero_section}>
           <h2>I am</h2>
          <h1>{index<16 ? text.charAt(index): 'I'}</h1>
          
       </section>
    </>
  ) 
}
