import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/user/userThunk';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const [users, setUser] = useState({});
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user....', users);
    dispatch(createUser(users)).then(() => {
      navigate('/read');
    });
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <form onSubmit={handleSubmit} className='w-full max-w-md rounded-lg bg-white p-6 shadow'>
        <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Create User</h2>

        <label className='block text-sm font-medium text-gray-700'>Name</label>
        <input
          type='text'
          name='Name'
          onChange={getUserData}
          className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          placeholder='Enter name'
        />

        <label className='mt-4 block text-sm font-medium text-gray-700'>Email</label>
        <input
          type='email'
          name='Email'
          onChange={getUserData}
          className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          placeholder='Enter email'
        />

        <label className='mt-4 block text-sm font-medium text-gray-700'>Age</label>
        <input
          type='number'
          name='Age'
          onChange={getUserData}
          className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'
          placeholder='Enter age'
        />

        <label className='mt-4 block text-sm font-medium text-gray-700'>Gender</label>
        <select name='Gender' onChange={getUserData} className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none'>
          <option value=''>Select gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>

        <button type='submit' className='mt-6 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700'>
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
