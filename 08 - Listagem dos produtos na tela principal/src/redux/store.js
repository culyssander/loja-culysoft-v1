import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./slice/auth-slice";
import categoriasSlice from "./slice/categorias-slice";
import produtosSlice from "./slice/produtos-slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        categorias: categoriasSlice,
        produtos: produtosSlice
    }
})

export default store