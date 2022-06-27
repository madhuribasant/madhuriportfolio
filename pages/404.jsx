import React from 'react'
import Link from 'next/link'
import Meta from '../components/Meta'

const errorPage = () => {
  return (
    <>
    <Meta title="404  "/>
    <section className='h-screen flex flex-col items-center justify-center p-2'>
    
        <h1 className='font-poppins font-extrabold md:text-6xl text-4xl '>404 : Page not Found</h1>
        <Link href="/" className='font-bold bg-black text-white text-xl'> Go Back </Link>
    </section>
    </>
  )
}

export default errorPage