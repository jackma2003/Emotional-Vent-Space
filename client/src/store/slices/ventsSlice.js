import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Async thunks for API calls
export const fetchVents = createAsyncThunk(
  'vents/fetchVents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/vents`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch vents');
    }
  }
);

export const createVent = createAsyncThunk(
  'vents/createVent',
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/vents`, { text });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create vent');
    }
  }
);

export const deleteVent = createAsyncThunk(
  'vents/deleteVent',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/vents/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete vent');
    }
  }
);

const ventsSlice = createSlice({
  name: 'vents',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch vents
    builder
      .addCase(fetchVents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchVents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create vent
      .addCase(createVent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createVent.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload); // Add to beginning
      })
      .addCase(createVent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete vent
      .addCase(deleteVent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVent.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((vent) => vent._id !== action.payload);
      })
      .addCase(deleteVent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = ventsSlice.actions;
export default ventsSlice.reducer;

