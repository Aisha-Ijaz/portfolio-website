import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/img.jpeg)] bg-right lg:bg-[10%] bg-cover'
    style={{backgroundSize: "25%", backgroundPosition: "right 100px top 200px"}}
    >
        <Navbar />
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'></div>
            <div className='text-center lg:text-left flex flex-col items-center lg:items-start'>
                <p className='text-2xl text-white-600 mb-2 '>Hello! I&apos;m</p>
                <p className='text-5xl text-blue-500 font-bold'>Aisha Ijaz</p>
                <br />
                <p className='text-gray-500 '>I&apos;m a web developer passionate about creating functional and visually appealing websites. Skilled in HTML, CSS, JavaScript, and TypeScript, I&apos;m currently expanding my knowledge in Generative Cloud Computing and AI.</p>
                <br />
                <button className='bg-blue-500 p-2 px-6'>Hire Me</button>
            </div>
        </div>
        </div>
  )
}

export default Hero