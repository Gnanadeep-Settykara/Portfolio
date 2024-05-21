import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typical from 'react-typical';

const Home = () => {
  const handleResumeClick = () => {
    // Open the resume PDF in a new tab/window
    window.open(process.env.PUBLIC_URL + '/Gnanadeep Settykara_Data_Analyst.pdf', '_blank');
  };

  return (
    <div name='home' className='w-full h-screen bg-[#121718]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="text-pink-700 text-2xl">
          <span>
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                'Hello!',
                2000,
                'Hallo!',
                2000,
                'Hola!',
                2000,
              ]}
            />
          </span> My Name is
        </p>
        <h1 className='text-4xl sm:text-4xl font-bold text-[#ccd6f6]'>
          Gnanadeep Settykara
        </h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>
          <span>I'm a </span>
          <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
              'Software Engineer.',
              2000,
              'Full-stack Developer.',
              2000,
              'Data Engineer.',
              2000,
              'Data Analyst.',
              2000,
            ]}
          />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          In the ever-evolving landscape of technology,
          "Call me a tech enthusiast, a code connoisseur, or a data devotee—I wear many hats,
          all fueled by an unquenchable thirst for knowledge and a burning passion for innovation."
        </p>
        <div>
          {/* Updated Link and button for View Resume */}
          <button
            onClick={handleResumeClick}
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
          >
            View Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
