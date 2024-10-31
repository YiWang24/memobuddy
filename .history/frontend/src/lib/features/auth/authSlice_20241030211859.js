import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/api";

const loadAuthState = () => {
  try {
    const serializedAuth = localStorage.getItem("authState");
    if (serializedAuth === null) {
      return {
        isAuthenticated: false,
        user: null,
        error: null,
      };
    }
    return JSON.parse(serializedAuth);
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null,
      error: null,
    };
  }
};

const initialState = loadAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem(
        "authState",
        JSON.stringify({
          isAuthenticated: true,
          user: action.payload.user,
          error: null,
        })
      );
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem("authState");
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("authState");
    },
    validateSessionSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
    },
    validateSessionFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      localStorage.removeItem("authState");
    },
  },
});

const {
  loginSuccess,
  loginFailure,
  logout,
  validateSessionFailure,
  validateSessionSuccess,
} = authSlice.actions;

const authReducer = authSlice.reducer;

const fetchLogin = (loginForm) => async (dispatch) => {
  try {
    const response = await authApi.login(loginForm);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

const fetchValidateSession = () => async (dispatch) => {
  try {
    const response = await authApi.validateSession();
    dispatch(validateSessionSuccess(response.data));
  } catch (error) {
    dispatch(validateSessionFailure(error.message));
  }
};

const fetchLogout = () => async (dispatch) => {
  try {
    await authApi.logout();
    dispatch(logout());
  } catch (error) {
    console.error("Error logging out:", error);
    dispatch(logout());
  }
};

export { fetchLogin, fetchLogout };
export default authReducer;
