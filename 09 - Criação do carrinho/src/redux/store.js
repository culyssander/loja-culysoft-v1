import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./slice/auth-slice";
import carrinhoSlice from "./slice/carrinho.slice";
import categoriasSlice from "./slice/categorias-slice";
import produtosSlice from "./slice/produtos-slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        categorias: categoriasSlice,
        produtos: produtosSlice,
        carrinhos: carrinhoSlice
    }
})

export default store