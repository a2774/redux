import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetUser, deleteUser } from '../features/user/userThunk';
// import { GetUser, deleteUser } from '../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';

function Read() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetAllUser();
  }, []);

  const GetAllUser = async () => {
    const data = await dispatch(GetUser());
    setUsers(data.payload);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id)).then(() => {
      GetAllUser();
    });
  };

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4 text-center'>User List</h1>

      <table className='w-full border-collapse border border-gray-300'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>ID</th>
            <th className='border border-gray-300 px-4 py-2'>Name</th>
            <th className='border border-gray-300 px-4 py-2'>Email</th>
            <th className='border border-gray-300 px-4 py-2'>Age</th>
            <th className='border border-gray-300 px-4 py-2'>Gender</th>
            <th className='border border-gray-300 px-4 py-2'>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr key={item.id} className='text-center hover:bg-gray-100'>
              <td className='border border-gray-300 px-4 py-2'>{item.id}</td>
              <td className='border border-gray-300 px-4 py-2'>{item.Name}</td>
              <td className='border border-gray-300 px-4 py-2'>{item.Email}</td>
              <td className='border border-gray-300 px-4 py-2'>{item.Age}</td>
              <td className='border border-gray-300 px-4 py-2'>{item.Gender}</td>

              <td className='border border-gray-300 px-4 py-2 space-x-2'>
                <Link to='/create' className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
                  Add
                </Link>

                <button onClick={() => handleEdit(item.id)} className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'>
                  Edit
                </button>

                <button onClick={() => handleDelete(item.id)} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
