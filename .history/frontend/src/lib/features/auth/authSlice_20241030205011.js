import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/api";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

const { loginSuccess, loginFailure, logout } = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (loginForm) => async (dispatch) => {
  try {
    const response = await authApi.login(loginForm);
    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
      return true;
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};



export { fetchLogin, authReducer, logout };
export default authReducer;
