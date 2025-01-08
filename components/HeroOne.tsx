import React from 'react'
import Image from 'next/image'
const HeroOne = () => {
  return (
    <div className='container mx-auto mt-48'>
      <div className='flex flex-col md:flex-row space-x-5 justify-evenly'>
        <div className=' text-center mt-28'>
            <h1 className='text-2xl font-bold '>An e-commerce website is an online <br /> store where customers can buy products <br /> and services from a business over the internet.</h1>
        </div>
        <div>
            <Image src={"/men.png"} alt='null' width={500} height={500}/>
        </div>
      </div>

      <div className='flex justify-center items-center mt-5'>
        <h1 className='text-5xl font-bold'>Our Products</h1>
      </div>
      <div className='bg-yellow-300 py-1  rounded mt-5'></div>
    </div>
  )
}

export default HeroOne
