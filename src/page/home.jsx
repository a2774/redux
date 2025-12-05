import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <section className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24'>
        <div className='max-w-6xl mx-auto px-6'>
          <h1 className='text-5xl font-extrabold mb-4'>Welcome to Our Platform</h1>
          <p className='text-xl opacity-90 max-w-2xl'>This is a dummy home page layout built with Tailwind CSS. Clean, modern, and fully customizable.</p>

          <button className='mt-8 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200'>Get Started</button>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>Our Features</h2>

          <div className='grid gap-8 md:grid-cols-3'>
            <div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3 text-blue-600'>Fast & Easy</h3>
              <p className='text-gray-600'>Quickly perform tasks with our clean UI and optimized workflow.</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3 text-indigo-600'>Modern Design</h3>
              <p className='text-gray-600'>Experience a simple yet beautiful interface designed for everyone.</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold mb-3 text-purple-600'>Responsive Layout</h3>
              <p className='text-gray-600'>Works perfectly on all screen sizes — mobile, tablet, and desktop.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className='py-6 bg-gray-900 text-center text-white'>
        <p className='opacity-80'>© 2025 Dummy Home Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
