'use client';
import Image from 'next/image';
import React from 'react';
import Circuit from '../assets/circuit.webp';
import bgimage from '../assets/bgimage/home.jpg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
const Home = () => {
  return (
    <div
      id='hero'
      className=' h-screen font-acme  text-black grid place-items-center'
    >
      <div className='flex flex-col justify-center items-center text-center'>
        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          className=' text-4xl font-inter md:text-7xl  px-3'
        >
          PROJECT VIDYA{' '}
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='text-blue-400 py-2'
        >
          On The Way To Chase Dreams{' '}
        </motion.p>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.4 }}
          className='py-1'
        >
          One life One Chance...
        </motion.p>

        {/* <Link to='contact' smooth={true} duration={500}>
          <motion.button
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className='btn bg-black text-white capitalize font-thin'
          >
            Contact Us
          </motion.button>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
