import { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="p-4 flex-row lg:flex gap-8 lg:justify-center">

            <div className='space-y-8 lg:w-1/2 pt-10 pb-20'>

                <h1 className='text-xl font-bold tracking-normal opacity-80'> Hello my name is 
                <span className='uppercase text-orange-400'> sanjay shah </span>  </h1>

                <p className=' opacity-50 lg:text-justify text-sm lg:text-[15px] transition-all ease-in-out delay-300 translate-x-100 '>
                    A self-motivated and quick learner Full-Stack-Developer with more than years of experience on multiple projects . I was working as a free-lancer and had developed different categories of products.
                    Working as a free-lancer , I had the opportunity to develop my communication skills and was also able to understand the needs of the client . Aside from freelancing, I had the opportunity to work as a software engineer in a corporate environment for a year, and I had the opportunity to work with a team, which improved my understanding and cooperation between individuals.
                </p>

                <div className='space-y-8'>

                <p className=' opacity-80 lg:text-justify text-sm lg:text-[15px] transition-all ease-in-out delay-300 translate-x-100 '>
                    <snap className="underline text-2xl font-bold text-orange-400 uppercase"> Skills :</snap>
                </p>

                <ul className='flex space-x-2 sm:space-x-4 text-sm'>
                    <li> Python </li>
                    <li> Django </li>
                    <li> Nodejs </li>
                    <li> React </li>
                    <li>Flutter</li>
                </ul>
               
                </div>

                

            </div>

            <div className=' lg:w-1/2 rounded'>
                <Image src="/hero.jpg" width={800} height={600} alt="img" className="rounded" />
            </div>


        </div>
    )
}


export default Hero;