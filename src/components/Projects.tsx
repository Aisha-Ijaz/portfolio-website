import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Simple Calculator",
        description: "A basic calculator app with functionalities to add, subtract, multiply, and divide.",
        img: "/Calculator.jpg",
        GithubLink: "https://github.com/Aisha-Ijaz/Simple-Calculator.git",
    },
    {
      id: 1,
      title: 'Currency Converter',
      description: 'A simple app to convert currencies using real-time exchange rates.',
      img: "/currency converter.jpg",
      githubLink: 'https://github.com/Aisha-Ijaz/currency_converter.git',
    },
  {
    id: 2,
    title: "ATM machine",
    description: "A CLI-based ATM machine simulator with basic functionalities like withdrawal, deposit, and balance check.",
    img: "/ATM machine.jpg",
    githubLink: "https://github.com/Aisha-Ijaz/Atm-machine.git"
  },
  {
  id: 3,
  title: "Word counter",
  description: "A simple word counter tool to count the number of words and characters in a given text.",
  img: "/word counter.jpg",
  githubLink: "https://github.com/Aisha-Ijaz/word-counter.git"
  },
  {
  id: 4,
  title: "Number Guessing game",
  description: "A number guessing game where the user has to guess a random number between a range.",
  img: "/Number Guessing game.png",
  githubLink: "https://github.com/Aisha-Ijaz/cli-number-guessing.git",
  }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 lg:grid-cols-3 place-items-center'>
            {data.map((el)=> (<Card 
            key={el.id}
            title={el.title}
            desc={el.description}
            img={el.img}
            githubLink={el.githubLink}
            />))}
        </div>
        
    </div>
  )
}

export default Projects