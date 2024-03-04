import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import C from '../assets/c.png';
import CPP from '../assets/cpp.png';
import SQL from '../assets/sql.png';
import MySQL from '../assets/mysql.png';
import Git from '../assets/git.png';
import Windows from '../assets/windows.png';
import Linux from '../assets/linux.png';
import VSCode from '../assets/vscode.png';
import Jupyter from '../assets/jupyter.png';
import PyCharm from '../assets/pycharm.png';
import MSOffice from '../assets/msoffice.png';
import AWS from '../assets/aws.png';
import Azure from '../assets/azure.png';
import TypeScript from '../assets/typescript.png';
import R from '../assets/R.png';
import Tableau from '../assets/tableau.png';
import GraphQL from '../assets/graphql.png';

const Skills = () => {
  const skillData = [
    { icon: Python, label: 'Python' },
    { icon: MySQL, label: 'MySQL' },
    { icon: HTML, label: 'HTML' },
    { icon: CSS, label: 'CSS' },
    { icon: JavaScript, label: 'JavaScript' },
    { icon: TypeScript, label: 'TypeScript'},
    { icon: ReactImg, label: 'React' },
    { icon: Node, label: 'Node.js' },
    { icon: GraphQL, label: 'GraphQL'},
    { icon: GitHub, label: 'GitHub' },
    { icon: Tailwind, label: 'Tailwind CSS' },
    { icon: Mongo, label: 'MongoDB' },
    { icon: Java, label: 'Java' },
    { icon: C, label: 'C' },
    { icon: CPP, label: 'C++' },
    { icon: SQL, label: 'SQL' },
    { icon: R, label: 'R' },
    { icon: Tableau, label: 'Tableau'},
    { icon: Git, label: 'Git' },
    { icon: Windows, label: 'Windows' },
    { icon: Linux, label: 'Linux' },
    { icon: VSCode, label: 'VS Code' },
    { icon: Jupyter, label: 'Jupyter' },
    { icon: PyCharm, label: 'PyCharm' },
    { icon: MSOffice, label: 'MS Office' },
    { icon: AWS, label: 'AWS' },
    { icon: Azure, label: 'Azure' },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div className='w-full h-screen bg-[#121718] text-gray-300' id="skills">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
            <div className="skill-bx wow zoomIn">
              <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</h2>
              <p className='py-4'>These are the skills I've worked with. Consider these skills a mere glimpse into my ever-growing arsenal !</p>
              <br></br>
              
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillData.map((skill, index) => (
                  <div className='shadow-md shadow-[#b4dad7] hover:scale-110 duration-500 p-4' key={index}>
                    <img className='w-22 mx-auto' src={skill.icon} alt="Skill Icon" />
                    <p className='my-4 flex justify-center'>{skill.label}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      
  );
};

export default Skills;
