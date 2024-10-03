import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../config/api-url";

const  initialState = {
    estaCarregado: true,
    produtos: []
}

export const buscaTodosProdutos = createAsyncThunk('produtos/buscarTodos', async(props) => {
    try {
        const response = await fetch(`${API_URL}/produtos`)

        return await response.json()
    } catch (error) {
        return error
    }
})

const produtoSlice = createSlice({
    name: 'produtos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscaTodosProdutos.pending, (state) => {
            state.estaCarregado = true
        }).addCase(buscaTodosProdutos.fulfilled, (state, action) => {
            state.estaCarregado = false
            state.produtos = action.payload
        }).addCase(buscaTodosProdutos.rejected, (state) => {
            state.estaCarregado = false
            state.produtos = []
        })
    }
})


export default produtoSlice.reducer