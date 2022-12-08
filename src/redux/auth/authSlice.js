import { createSlice } from '@reduxjs/toolkit';
import { login, register, logOut, refreshUser } from './operations';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast({
        title: 'Account created.',
        description: `${action.payload.user.name} we've created your account for you.`,
        status: 'success',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      toast({
        title: `${action.payload.user.name} logged in`,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      toast({
        title: 'logged out',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
