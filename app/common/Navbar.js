'use client';
import React, { useEffect, useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className='relative'>
      <header
        className={`z-50 fixed ${
          !scroll && !open
            ? 'bg-transparent'
            : open
            ? 'bg-white'
            : 'bg-white shadow border-gray-500'
        } top-0  py-3   w-full `}
      >
        <div className='flex items-center justify-between xl:max-w-7xl max-w-full xl:m-auto px-10 flex-wrap'>
          {/* name tag */}
          <div className=''>
            <p className='text-2xl font-black-ops text-red-600 md:text-3xl font-vol'>
              EduWomen
              {/* <span className="text-red-500">.</span> */}
            </p>
          </div>

          {/* hamburger */}
          <FaBars
            className='block md:hidden'
            onClick={() => setOpen((prev) => !prev)}
          />

          {/* navbar */}
          <nav
            className={`md:block ${open ? 'block' : 'hidden'} ${
              scroll ? 'bg-white' : 'bg-transparent'
            } md:w-auto w-full md:flex items-center font-black`}
          >
            <ul className='w-full text-base md:flex'>
              <li>
                <Link
                  onClick={handleClose}
                  smooth={true}
                  duration={500}
                  to='hero'
                  className='block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  to='about'
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className='block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600'
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={handleClose}
                  offset={-50}
                  to='tool'
                  smooth={true}
                  duration={500}
                  className='block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600'
                >
                  Tools
                </Link>
              </li> */}
              <li>
                <Link
                  onClick={handleClose}
                  to='products'
                  offset={-50}
                  smooth={true}
                  duration={500}
                  className='block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600'
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  to='clients'
                  className='block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600'
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  smooth={true}
                  duration={500}
                  to='contact'
                  className='block py-2 font-semibold cursor-pointer md:px-5 hover:text-blue-600'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
