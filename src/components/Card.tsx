import React from 'react'
import Image from 'next/image';


interface propsType {
    title: string;
    desc: string;
    img: string;
    githubLink?: string;
}

const Card:React.FC<propsType> = ({ title, desc, img, githubLink }) => {
  return (
    <div className='border border-accents- w-[300px] sm:w-[350px]'>
        <div>
        <Image className='w-[350px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />

        </div>

        <div className='p-4 space-y-4'>
            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
              
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
          
        </div>
                
        </div>
    </div>
  )
}

export default Card