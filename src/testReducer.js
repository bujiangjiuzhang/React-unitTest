import { createSlice } from '@reduxjs/toolkit';

export const testReducer = createSlice({
  name: 'test', 
  initialState: {
    data: [],
    title: '测试useSelector111',
    loading: true
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) =>{
      state.loading = false;
      state.data = action.payload.data;
      state.title = action.payload.title;
    }
  }
})
