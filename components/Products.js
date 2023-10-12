import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import Blueimage from '../assets/ourwork/Blue.jpeg';
import Redimage from '../assets/ourwork/Red.jpeg';

const Products = () => {
  // Your component code...

  return (
    <div id='products' className='font-acme text-black grid place-items-center'>
      <h1 className='p-5 text-2xl md:text-5xl font-fugas text-center text-red-500'>
        OUR WORK
      </h1>

      <br></br>
      <br></br>

      {/* Display an image */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
        <div className='text-center'>
          <div className='flex flex-col items-center'>
            <Image src={Blueimage} alt='Image' width={150} height={150} />
            <p className='mt-2'>
              Graduate from secondary education, pursue higher education &
              vocational training programs.
            </p>
            <br></br>
          </div>
        </div>
        <div className='text-center'>
          <div className='flex flex-col items-center'>
            <Image src={Redimage} alt='Image' width={150} height={150} />
            <p className='mt-2'>
              Recognize her ability to be a leader & make lasting change.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className='flex flex-col items-center'>
            <Image src={Blueimage} alt='Image' width={150} height={150} />
            <p className='mt-2'>
              Access community resources & guide others to them.
            </p>
          </div>
        </div>
      </div>
      {/* <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-6 space-y-2 gap-2 text-justify'>
        <p style={{ width: '100%' }}>
          The WEP Academy and its impact are made possible by its partnerships
          with India-based NGOs. Each partner knows the unique circumstances of
          the local community to most effectively run the Academy. WEP and NGOs
          together provide a bridge for young women as they enter adulthood,
          with the Academy serving as an extension to preexisting programs that
          end at adolescence. Partners range from independent to
          transformational, depending on the funding infrastructure.
        </p>
      </div> */}
    </div>
  );
};

export default Products;
