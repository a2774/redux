import { createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk('create', async (data, { rejectWithValue }) => {
  try {
    const response = await fetch('https://69327841e5a9e342d26f473b.mockapi.io/crud', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const GetUser = createAsyncThunk('GetUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://69327841e5a9e342d26f473b.mockapi.io/crud');
    return await response.json();
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const getSingleUser = createAsyncThunk('getSingleUser', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://69327841e5a9e342d26f473b.mockapi.io/crud/${id}`);
    return await response.json();
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const updateUser = createAsyncThunk('updateUser', async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://69327841e5a9e342d26f473b.mockapi.io/crud/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://69327841e5a9e342d26f473b.mockapi.io/crud/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  } catch (err) {
    return rejectWithValue(err);
  }
});
