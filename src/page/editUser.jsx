import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, updateUser } from '../features/user/userThunk';
// import { getSingleUser, updateUser } from '../features/user/userSlice';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleUser, loading } = useSelector((state) => state.app);

  const [editData, setEditData] = useState({
    Name: '',
    Email: '',
    Age: '',
    Gender: '',
  });

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [id]);

  useEffect(() => {
    if (singleUser && singleUser.id) {
      setEditData({
        Name: singleUser.Name || '',
        Email: singleUser.Email || '',
        Age: String(singleUser.Age || ''),
        Gender: singleUser.Gender || '',
      });
    }
  }, [singleUser]);

  const handleUpdate = () => {
    dispatch(updateUser({ id, data: editData })).then(() => navigate('/read'));
  };

  if (loading || !singleUser.id) {
    return <h2 className='text-center text-xl mt-10 font-bold text-gray-600'>Loading user data…</h2>;
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <form className='w-full max-w-md rounded-lg bg-white p-6 shadow'>
        <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Edit User</h2>

        <label className='block text-sm font-medium text-gray-700'>Name</label>
        <input
          type='text'
          value={editData.Name}
          onChange={(e) => setEditData({ ...editData, Name: e.target.value })}
          className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2'
        />

        <label className='mt-4 block text-sm font-medium text-gray-700'>Email</label>
        <input
          type='email'
          value={editData.Email}
          onChange={(e) => setEditData({ ...editData, Email: e.target.value })}
          className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2'
        />

        <label className='mt-4 block text-sm font-medium text-gray-700'>Age</label>
        <input
          type='number'
          value={editData.Age}
          onChange={(e) => setEditData({ ...editData, Age: e.target.value })}
          className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2'
        />

        <label className='mt-4 block text-sm font-medium text-gray-700'>Gender</label>
        <select value={editData.Gender} onChange={(e) => setEditData({ ...editData, Gender: e.target.value })} className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2'>
          <option value=''>Select gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>

        <button type='button' onClick={handleUpdate} className='mt-6 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700'>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
