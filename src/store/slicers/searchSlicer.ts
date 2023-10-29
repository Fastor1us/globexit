import { createSlice } from '@reduxjs/toolkit';

import type { TUserData } from '../../../interfaces/user-data-type';

type TState = {
  userList: TUserData[] | [];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const initialState: TState = {
  userList: [],
  isLoading: false,
  isError: false,
  isSuccess: false
};


const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.userList = action.payload.data || [];
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
      state.isSuccess = action.payload.isSuccess;
    }
  }
});

export const { setSearchData } = searchSlice.actions;

export default searchSlice.reducer;
