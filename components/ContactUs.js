'use client';
import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

const ContactUs = () => {
  return (
    <div
      id='contact'
      className='h-screen font-acme text-black grid place-items-center'>
      <h1 className='p-1 mt-0 text-2xl md:text-5xl font-fugas text-center text-red-500'>
        CONTACT US
      </h1>

      <form
        action='https://getform.io/f/f56ab7cb-cd81-4374-a75e-c0c9e6c07c62'
        method='POST'
        className='contact-form flex flex-col gap-3 w-full max-w-xl'>
        <input
          type='text'
          name='from_name'
          placeholder='Name'
          required
          className='border-black border p-2 rounded'></input>

        <input
          type='email'
          name='user_email'
          pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
          placeholder='Email'
          required
          className='border-black border p-2 rounded'></input>

        <textarea
          placeholder='Message'
          name='message'
          required
          className='border border-black p-2 rounded'></textarea>
        <button className='btn bg-black text-white capitalize'>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
