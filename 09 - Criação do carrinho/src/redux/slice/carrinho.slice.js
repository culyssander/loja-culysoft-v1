import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    produtos: []
}


const carrinhoSlice = createSlice({
    name: 'carrinhos',
    initialState,
    reducers: {
        adicionarProdutoNoCarrinho: (state, action) => {
            const produtoJaExiste = state.produtos.some(produto => produto.id === action.payload.id)

            if (produtoJaExiste) {
                state.produtos = state.produtos.map(produto => produto.id === action.payload.id ? {...produto, quantidade: produto.quantidade + 1} : produto)
            }

            state.produtos = [...state.produtos, {...action.payload, quantidade: 1}]
        }, 

        aumentarQuantidadeDoProduto: (state, action ) => {
            state.produtos = state.produtos.map(produto => produto.id === action.payload ? {...produto, quantidade: produto.quantidade + 1} : produto)
        },
        diminuirQuantidadeDoProduto: (state, action) => {
            state.produtos = state.produtos.map(produto => produto.id === action.payload ? {...produto, quantidade: produto.quantidade - 1} : produto)
            .filter(produto => produto.quantidade > 0)
        },

        removerProduto: (state, action) => {
            state.produtos = state.produtos.filter(produto => produto.id !== action.payload)
        },
        actualizaPagina: (state, action) => {
            if (action.payload && action.payload.length > 0 ) {
                state.produtos = action.payload
            } else {
                state.produtos = []
            }
        }

    }
})

export const { adicionarProdutoNoCarrinho, aumentarQuantidadeDoProduto, diminuirQuantidadeDoProduto, removerProduto, actualizaPagina} = carrinhoSlice.actions
export default carrinhoSlice.reducer