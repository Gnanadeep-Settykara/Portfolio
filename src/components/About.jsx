import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#121718] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Gnanadeep Settykara, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>With a passion for building exceptional software, I'm here to make a difference in the lives of others. 
                As a Master of Science in Software Engineering student at ASU, my expertise lies in creating tailored solutions for individuals, 
                small businesses, and large enterprises. I combine technical excellence, creative problem-solving, and 
                the latest technologies to deliver remarkable results. Imagine having a software expert at your fingertips, 
                ready to bring your ideas to life. Together, we can embark on a transformative journey where your digital dreams become a reality. 
                Let's unlock the limitless potential of technology and create something extraordinary.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
