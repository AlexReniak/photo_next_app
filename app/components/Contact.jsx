'use client';

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className='container my-12 mx-auto'>
      <h2 className='text-3xl my-8 text-center'>Let's get in touch</h2>
      <div className='max-w-lg mx-auto p-6 bg-zinc-900 rounded-lg shadow-xl'>
        <form className='space-y-6'>
          <div className='relative'>
            <input
              type='text'
              id='name'
              className={`peer w-full border-b-2 text-emerald-500 focus:outline-none focus:border-emerald-500  bg-zinc-900 placeholder-transparent h-10 ${
                name ? 'border-emerald-500' : 'border-white'
              }`}
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor='name'
              className={
                'absolute left-0 -top-3.5 cursor-text text-emerald-500 text-sm transition-all peer-placeholder-shown:text-base  peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-emerald-500 peer-focus:text-sm'
              }
            >
              Name
            </label>
          </div>
          <div className='relative'>
            <input
              type='email'
              id='email'
              className={`peer w-full border-b-2 text-emerald-500 focus:outline-none focus:border-emerald-500 bg-zinc-900 placeholder-transparent h-10 ${
                email ? 'border-emerald-500' : 'border-white'
              }`}
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor='email'
              className='absolute left-0 -top-3.5 cursor-text text-emerald-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-emerald-500 peer-focus:text-sm'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <textarea
              id='message'
              rows={4}
              className={`peer w-full border-b-2 text-emerald-500 focus:outline-none focus:border-emerald-500 bg-zinc-900
              resize-none placeholder-transparent ${
                message ? 'border-emerald-500' : 'border-white'
              }`}
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label
              htmlFor='message'
              className='absolute left-0 -top-3.5 cursor-text text-emerald-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-[18px] peer-focus:text-emerald-500 peer-focus:text-sm'
            >
              Message
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-emerald-500 text-white text-lg py-2 px-4 rounded-md hover:bg-emerald-600 transition-scale duration-300'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
