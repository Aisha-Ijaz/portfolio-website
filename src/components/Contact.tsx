import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
    <div className='grid md:grid-cols-2 gap-10'>

    <div className='min-h-screen bg-no-repeat bg-right lg:bg-[15%] bg-cover'
  style={{
    backgroundImage: `url(contact.jpg)`,
    backgroundSize: "80%",
    backgroundPosition: "right 100px top 100px"}}
    >
        </div>
        <div className='space-y-8'>
            <h2 className='text-5xl'>Let&apos;s Connect!</h2>
            <p className='text-gray-600 text-[18px] pt-2'>
            Whether you&apos;re interested in discussing a project, collaboration, or just want to say hi, feel free to reach out.
            </p>
            <div className='flex gap-3 items-center'>
            <MdEmail  size={20}/><a href="mailto:ejaz58650@gmail.com" target='blank'>ejaz58650@gmail.com</a>
            </div>
            <div className='flex gap-3 items-center'>
            <FaLinkedin size={20}/><a href="https://www.linkedin.com/in/aisha-ijaz-b2a85b22b/" target='blank'>Aisha Ijaz</a>
            </div>
            <div className='flex gap-3 items-center'>
            <VscGithubInverted size={20}/><a href="https://github.com/Aisha-Ijaz?tab=repositories" target='blank'>Aisha-Ijaz</a>
            </div>
            <div className='flex gap-3 items-center'>
            <BsFillTelephoneFill size={20}/> (021) 000 0000
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className='h-[40] bg-transparent border border-blue' id='name' />
                </div>
                <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email:</label>
                    <input type="mailto" className='h-[40] bg-transparent border border-blue' id='email' />
                </div>
                <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message"className=' bg-transparent border  border-blue '
                    rows={3}
                    ></textarea>
                </div>
                <button className='bg-blue-500 p-2 px-6'>Send</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact