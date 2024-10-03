import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL } from "../../config/api-url"

const initialState = {
    categorias: []
}

export const buscaTodasCategorias = createAsyncThunk('/categorias/buscaTodos', async() => {
    try {
        const response = await fetch(`${API_URL}/categorias`)

        return await response.json()
    } catch (error) {
        return error
    }
})

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscaTodasCategorias.pending, (state) => {

        }).addCase(buscaTodasCategorias.fulfilled, (state, action) => {
            console.log(action);
            
            state.categorias = action.payload
        }).addCase(buscaTodasCategorias.rejected, (state) => {
            state.categorias = []
        })
    }
})

export default categoriasSlice.reducer