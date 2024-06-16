import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: {
    name: "Név",
}}

export const authNoApiSlice = createSlice({
    name: 'authNoApi',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
        },
        logout(state) {
            state.user = null;
        },
    },
});

export default authNoApiSlice;
export const { logout } = authNoApiSlice.actions;
export const { reducer: authNoApiReducer } = authNoApiSlice;
