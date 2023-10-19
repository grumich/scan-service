import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  expire: null,
  user: null,
  isLoggedIn: false,
};

export const slice = createSlice({
  initialState,
  name: 'auth',

  reducers: {
    logout: () => initialState,

    setCredentials: (state, { payload: { accessToken, expire } }) => {
      state.accessToken = accessToken;
      state.expire = expire;
      state.user = {
        name: 'Александр А.',
        avatar: 'https://cs6.pikabu.ru/avatars/1576/v1576985-1962120878.jpg',
        tariff: 'beginner',
      };
      state.isLoggedIn = true;
    },
  },
});

export const { logout, setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAccessTokenExpire = (state) => state.auth.expire;
