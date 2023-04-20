import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserData} from '../interfaces/User';

interface UserState {
  user: UserData;
}
interface FavoriteProductName {
  name: string;
}

const initialUser: UserState = {
  user: {
    id: '',
    data: {
      name: '',
      phone: '',
      location: '',
      email: '',
      avatarURL: '',
      favorites: [],
    },
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    clearUserInfor: state => {
      state.user = {
        id: '',
        data: {
          name: '',
          phone: '',
          location: '',
          email: '',
          avatarURL: '',
          favorites: [''],
        },
      };
    },
    addFavoriteProduct: (state, action: PayloadAction<FavoriteProductName>) => {
      if (!state.user.data.favorites.includes(action.payload.name))
        state.user.data.favorites.push(action.payload.name);
    },
    removeFavoriteProduct: (
      state,
      action: PayloadAction<FavoriteProductName>,
    ) => {
      const index = state.user.data.favorites.findIndex(
        (item: string) => item === action.payload.name,
      );

      state.user.data.favorites.splice(index, 1);
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  clearUserInfor,
  addFavoriteProduct,
  removeFavoriteProduct,
} = userSlice.actions;
