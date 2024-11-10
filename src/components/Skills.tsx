import React from 'react'

const Skills: React.FC = () => {
  return (
    <div id="skills" className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='test-4xl md:text-5xl'>Technologies I work with</h2>

                <p className='text-gray-500 pt-5'>I bring a strong blend of technical skills in web development and design, with proficiency in HTML, CSS, JavaScript, and TypeScript for creating engaging, responsive websites. My frontend expertise includes frameworks like React and Next.js, as well as Tailwind CSS for efficient, modern styling.</p>
                </div>
            <div className="flex flex-wrap justify-center">
            <span className="skill-badge">HTML5</span>
            <span className="skill-badge">CSS3</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">TypeScript</span>
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">Next.js</span>
            <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">Node.js</span>
          </div>
        </div> 
    </div>
  )
}

export default Skills