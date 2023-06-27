import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#121718] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/10ec1f49-e40f-40e2-841a-bb099b9db08b" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - gsettyka@asu.edu</p>
        </div>
        <input className='bg-[#ccd6f6] p-2 placeholder-gray-500' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6] placeholder-gray-500' type="email" placeholder='Email' name='email' required/>
        <textarea className='bg-[#ccd6f6] p-2 placeholder-gray-500' name="message" rows="10" placeholder='Message'required></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
