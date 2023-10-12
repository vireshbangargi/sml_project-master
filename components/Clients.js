'use client';
import React from 'react';
import { clients } from '../data/data.js';
import Image from 'next/image';

const Clients = () => {
  return (
    <div
      id='clients'
      className='h-[400px] font-acme text-black grid place-items-center'>
      <div className='m-auto w-full'>
        <h1 className='p-5 text-2xl md:text-5xl font-fugas text-center text-red-500'>
          OUR PROJECTS{' '}
        </h1>
        <br></br>

        <marquee className=''>
          <div className='flex justify-around gap-5 '>
            {clients.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={item}
                  alt=''
                  width={200}
                  loading='lazy'
                  className='p-2 sm:p-0 border border-slate-200 rounded shadow-md'
                />
              );
            })}
          </div>
        </marquee>
      </div>
      <br></br>
      <div>
        <h2 style={{ display: 'inline', color: 'black', position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              left: '-20px', // Adjust this value to control the space between the arrow and text
              color: 'red', // Set the arrow color to red
              fontWeight: 'bolder',
              // fontSize: '15px', // Increase the font weight for a bolder arrow
            }}>
            &bull; {/* Arrow character */}
          </span>
          To Register For a Course
        </h2>

        <a
          href='https://forms.gle/AN8uNMaxNSvhvwLW9'
          target='_blank'
          rel='noopener noreferrer'
          // className='btn bg-black text-white capitalize'
          style={{ display: 'inline', color: 'blue', marginLeft: '10px' }}>
          Click Here
        </a>
      </div>
      <div>
        <h2 style={{ display: 'inline', color: 'black', position: 'relative' }}>
          <span
            style={{
              position: 'absolute',
              left: '-30px', // Adjust this value to control the space between the arrow and text
              color: 'red', // Set the arrow color to red
              fontWeight: 'bolder',
              // fontSize: '15px', // Increase the font weight for a bolder arrow
            }}>
            &bull; {/* Arrow character */}
          </span>
          To Apply for Laptop
        </h2>

        <a
          href='https://forms.gle/w1YLu8gaxafRaw7H8'
          target='_blank'
          rel='noopener noreferrer'
          // className='btn bg-black text-white capitalize'
          style={{ display: 'inline', color: 'blue', marginLeft: '30px' }}>
          Click Here
        </a>
      </div>
    </div>
  );
};

export default Clients;
