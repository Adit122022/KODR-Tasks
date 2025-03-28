import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ACCESS_KEY = 'iIM-x852hTahF1CX_WJ_TdjF3HhPqx-vlvXk3oeYKyc' ;

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async ({ query, page = 1 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${query}&client_id=${ACCESS_KEY}`
      );
      return {
        results: response.data.results,
        totalPages: response.data.total_pages,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    currentPage: 1,  
    totalPages: 1,    
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload; 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.results;
        state.totalPages = action.payload.totalPages; 
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setPage } = imageSlice.actions; 
export default imageSlice.reducer;
