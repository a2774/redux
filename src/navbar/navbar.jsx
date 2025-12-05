import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-slate-900 text-white'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded-full bg-sky-500' />
            <span className='text-lg font-semibold tracking-tight'>Hello this side Anil Kumar</span>
          </div>

          <div className='hidden space-x-6 md:flex'>
            <Link to='/' className='text-sm hover:text-sky-400'>
              Home
            </Link>

            <Link to='/create' className='text-sm hover:text-sky-400'>
              Create
            </Link>
            <Link to='/read' className='text-sm hover:text-sky-400'>
              Read all post
            </Link>

            <a href='#' className='text-sm hover:text-sky-400'>
              Contact
            </a>
          </div>

          <div className='hidden md:block'>
            <button className='rounded-full border border-sky-500 px-4 py-1 text-sm font-medium hover:bg-sky-500/10'>Sign In</button>
          </div>

          <button className='inline-flex items-center justify-center rounded-md p-2 md:hidden hover:bg-slate-800' onClick={() => setIsOpen(!isOpen)}>
            <span className='sr-only'>Open main menu</span>

            <div className='space-y-1'>
              <span className='block h-0.5 w-5 bg-white' />
              <span className='block h-0.5 w-5 bg-white' />
              <span className='block h-0.5 w-5 bg-white' />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden border-t border-slate-800'>
          <div className='space-y-1 px-4 pb-3 pt-2'>
            <a href='#' className='block rounded-md px-3 py-2 text-sm hover:bg-slate-800'>
              Home
            </a>
            <a href='#' className='block rounded-md px-3 py-2 text-sm hover:bg-slate-800'>
              About
            </a>
            <a href='#' className='block rounded-md px-3 py-2 text-sm hover:bg-slate-800'>
              Services
            </a>
            <a href='#' className='block rounded-md px-3 py-2 text-sm hover:bg-slate-800'>
              Contact
            </a>
            <button className='mt-2 w-full rounded-full border border-sky-500 px-4 py-2 text-sm font-medium hover:bg-sky-500/10'>Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
