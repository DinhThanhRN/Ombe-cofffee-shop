import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Auth} from '../interfaces/Auth';

interface AuthProps {
  isAuthenticated: boolean;
  token: string;
  email: string;
}

const inititalAuth: AuthProps = {
  isAuthenticated: false,
  token: '',
  email: '',
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: inititalAuth,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      const token = action.payload.token;
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
        state.email = action.payload.email;
      }
    },
    logout: state => {
      state.isAuthenticated = false;
      state.token = '';
      state.email = '';
    },
  },
});

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;
