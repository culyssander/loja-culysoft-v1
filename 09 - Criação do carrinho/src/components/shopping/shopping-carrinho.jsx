import { useEffect, useState } from "react"

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ShoppingCarrinhoItem from "./shopping-carrinho-item"
import './styles/shopping-carrinho.css'

function ShoppingCarrinho({estaVisivel, setEstaVisivel}) {

    const [total, setTotal] = useState(0)
    const {produtos} = useSelector(state => state.carrinhos)
    const {estaLogado, usuario} = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        let resultado = produtos.reduce((valor, produto) => valor + (produto.quantidade * produto.preco), 0)

        setTotal(resultado)
    }, [produtos])

    function checkout () {
        if(!estaLogado) return navigate('/auth/login')

        if (usuario?.perfil === 'ADMIN') return navigate('/nao-autorizado')

        return navigate('/shop/checkout')
    }

    return(
        <div className="carrinho-container">
            <div className="area-carrinho" onClick={() => {
                setEstaVisivel(false)
            }}></div>
            <div className="carrinho-conteudo">
                <div className="carrinho-titulo">Seu carrinho</div>
                {
                    // items do carrinhos - lista de produtos
                    produtos && produtos.length > 0 ? produtos.map(produto => <ShoppingCarrinhoItem produto={produto}/>) : null
                }
                <div className="carrinho-total">Total R$ {total}</div>
                <button className="carrinho-botao-checkout" onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCarrinho