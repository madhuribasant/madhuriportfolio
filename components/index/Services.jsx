import styles from '../../styles/Home.module.css'
import { Card } from '../Card'
import Image from 'next/image'
import {BsArrowRightShort} from 'react-icons/bs'
import Link from 'next/link'
import { services } from '../data'

export const Services = ({service}) => {


  const style= 'group lg:w-[45vw] md:w-[40vw] w-full h-[30rem]  bg-current  transition delay-500 duration-1000 ease-in-out font-poppins grayscale '
  
  const headStyle = "font-semibold  text-inherit lg:text-4xl md:text-2xl text-xl group-hover:-translate-y-3 text-slate-900 group-hover:visible invisible z-20 transition capitalize  duration-1000"


  return (
    <section className={styles.services} id="services">
        <h1>Services</h1>
        <div className={styles.card_content}>
        {
          service.map((d)=>{
            const {id ,work ,image} = d
            return (

              <Card style={style} key={id}>
      
              <div className='absolute top-40 left-10 z-10 flex flex-col gap'>
                <h1 className={headStyle}>{work}</h1>
              </div>

                <Image src={image} layout='fill' objectFit='contain' />

            </Card>
            )
          })
        }  
            
        </div>
    </section>
  )
}
