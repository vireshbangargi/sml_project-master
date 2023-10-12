import React from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import image from '../../assets/footerimages/footer_logo.png';

const Footer = () => {
  return (
    <div className='sm:h-1/3 font-acme bg-slate-800 text-white -z-10 grid place-items-center'>
      <div className='grid sm:grid-cols-3 gap-10 text-center h-full py-5'></div>
    </div>
  );
};

export default Footer;
