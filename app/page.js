'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import About from '@/components/About';
import Products from '@/components/Products';
import ContactUs from '@/components/ContactUs';
import Clients from '@/components/Clients';
import Home from '@/components/Home';
import Tools from '@/components/Tools';
import Floter from './common/Floter';

const page = () => {
  return (
    <div>
      <Floter />
      <div className='bg-gradient-to-tr from-white via-blue-100  to-white'>
        <Navbar />
        <Home />
      </div>
      <div className='px-10  '>
        <About />
        <Products />
        {/* <Tools /> */}
        <Clients />
        {/* <Tools /> */}

        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default page;
