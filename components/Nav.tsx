import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-16 mx-auto max-w-full '>
        <div className='flex justify-evenly items-center space-x-5'>
            <div>
             < Image src={"/logo.png"} alt='null' width={100} height={100}/>
            </div>
            <div>
                <ul className='flex justify-center items-center space-x-5'>
                    <li className='text-xl font-bold'>
                        Home
                    </li>
                    <li className='text-xl font-bold'>
                        Prizes
                    </li>
                    <li className='text-xl font-bold'>
                        Categories
                    </li>
                </ul>
            </div>
            <div className='flex space-x-5'>
                <button className='bg-blue-500 py-3 px-5 text-lg rounded'>
                   <Link href={"/cart"}>Cart Products</Link>
                </button>
                <button className='bg-green-500 py-3 px-5 text-lg rounded'>
                    Login / Sign Up
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
