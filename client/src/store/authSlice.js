import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authenticateUser, registerUser } from '../api';

export const login = createAsyncThunk('auth/login', async (credentials) => {
    const [loginUser] = useLoginUserMutation();
    const response = await loginUser(credentials).unwrap();
    return response;
  });

export const register = createAsyncThunk('auth/register', async (userData) => {
    const response = await registerUser(userData);
    return response.data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        logout(state) {
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.accessToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default authSlice;
export const { logout } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
