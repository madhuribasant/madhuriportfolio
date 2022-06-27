import React ,{ useState} from 'react'
import {FiMail} from 'react-icons/fi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Link from 'next/link'

export const Contact = () => {
    const [hover, setHover] = useState(false)
  return (
    <section className={`flex flex-col h-screen justify-center items-center snap-start  font-poppins md:p-8 p-4 relative w-full bg-black transition-all duration-700 ${hover ? ' lg:[clip-path:circle(8%)] md:[clip-path:circle(10%)] [clip-path:circle(12%)]' :'[clip-path:circle(100%)]'} `} id="contact">
        <h1 className={`${!hover?'text-white':'text-black'} md:text-6xl text-4xl transition-all duration-700 `}>Want to Talk??</h1>    

        <Link  href='mailto:madhuri.basant007@gmail.com' >
          <FiMail className={`${hover ? 'block':'hidden'}  text-white text-6xl md:-translate-y-6 -translate-y-2 transition-all duration-700`}/>
        </Link> 
          <button className={`p-4 bg-transparent block text-white ${hover?'md:-translate-y-8 -translate-y-6 hidden  ':''} transition-all duration-700 md:text-3xl text-lg `} onClick={()=>setHover(!hover)}>Mail me</button>
          {/* <h2 className={'font-medium text-black text-sm flex items-center translate-y-20 visible z-50':'text-black'}  `}></h2> */}
        <h5 className={`text-white ${!hover?'translate-y-3':'text-opacity-0'} text-xs`}>Click me 👆</h5>
    </section>
  )
}
