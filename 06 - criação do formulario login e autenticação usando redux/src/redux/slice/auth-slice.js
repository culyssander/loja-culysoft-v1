import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../config/api-url";

const initialState = {
    estaCarregado: true,
    estaLogado: false,
    usuario: null
}

export const loginUsuario = createAsyncThunk('/auth/login', async(formulario) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formulario)
        })

        return await response.json()
    } catch (error) {
        return error
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(loginUsuario.pending, (state) => {
            state.estaCarregado = true
        }).addCase(loginUsuario.fulfilled, (state, action) => {
            console.log('action',action);
            
            state.estaCarregado = false
            state.estaLogado = action.payload?.status === 200 ? true : false
            state.usuario = action.payload?.status === 200 ? action.payload.usuario : null
        }).addCase(loginUsuario.rejected, (state) => {
            state.estaCarregado = false,
            state.estaLogado = false,
            state.usuario = null
        })
    }
})

export default authSlice.reducer