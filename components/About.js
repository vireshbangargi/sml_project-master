import React from 'react';

const ABOUT = () => {
  return (
    <div
      id='about'
      className='sm:h-screen font-acme  text-black grid place-items-center'>
      <div className='grid sm:grid-cols-2 gap-10 text-justify'>
        <div className='max-w-sm'>
          <h1 className='p-5 text-md sm:text-2xl  font-fugas  text-center text-blue-500'>
            MISSION{' '}
          </h1>
          <p className='text-sm sm:text-lg'>
            I dont want to see her dreams go in vain. I dont want to witness any
            fingers pointing at her for mistakes she never made. I want her to
            be respected by everyone, to stand confidently on her own feet, and
            to feel immense pride. In the end, I aspire to see her radiant with
            happiness as all her desires and dreams come to fruition.
          </p>
        </div>
        <div className='max-w-sm'>
          <h1 className='p-5 text-md sm:text-2xl  font-fugas  text-center text-blue-500'>
            OUR APPROACH{' '}
          </h1>
          <p className='text-sm sm:text-lg'>
            To fulfill her long-awaited dreams by identifying her interests,
            conducting market research, collecting all the necessary
            information, and engaging in discussions with her. This process
            enables her to make the right choice for her promising career. Once
            the right decision is made, we ensure a seamless transition to the
            next level, facilitating the joining process and providing
            continuous support and guidance until she achieves her dream job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ABOUT;
