import Head from 'next/head'
import Nav from "../components/Nav";


import {useState} from 'react';
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import {DarkMode,} from '@icon-park/react';

export default function Home() {
  const[mode,setMode]=useState(0);
  const Modes=["bg-black text-white p-4 lg:pl-20 lg:pr-20 lg:pt-10","bg-white text-black p-4 lg:pl-20 lg:pr-20 lg:pt-10"]
  const toggleMode=()=>{
    if(mode){
      setMode(0);
    }
    else{
      setMode(1);
    }
  }
  return (
    <>
      <Head>
        <title>shahsanjay.com</title>
        <meta name="description" content="shahsanjay.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${Modes[mode]}`}>
       <Nav/>
       <div className='flex justify-end cursor-pointer pr-4 pb-4'>   
      <DarkMode size={30} onClick={()=>toggleMode()}/>
      </div> 
       <Hero/>
       <Projects/>
       <Skill/>
       <Footer/>        
      </main>
    </>
  )
}
