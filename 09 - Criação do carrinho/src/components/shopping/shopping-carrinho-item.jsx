import { CircleX, Minus, Plus } from "lucide-react"

import { useDispatch } from "react-redux"
import { aumentarQuantidadeDoProduto, diminuirQuantidadeDoProduto, removerProduto } from "../../redux/slice/carrinho.slice"
import './styles/shopping-carrinho-item.css'

function ShoppingCarrinhoItem({produto}) {

    const dispatch = useDispatch()

    function aumentarQuantidadeDoProdutoNoCarrinho() {
        dispatch(aumentarQuantidadeDoProduto(produto.id))
    }

    function diminuirQuantidadeDoProdutoNoCarrinho() {
        dispatch(diminuirQuantidadeDoProduto(produto.id))
        remover()
    }

    function removerProdutoNoCarrinho() {
        dispatch(removerProduto(produto.id))
        remover()
    }

    function remover() {
        const produtoStorage = JSON.parse(sessionStorage.getItem('produtos'))
        console.log(produtoStorage);
        
        if (produtoStorage.length === 1)
            sessionStorage.removeItem('produtos')
    }

    return(
        <div className="carrinho-item">
            <img src={produto.imagemUrl} alt={produto.nome} />
            <div className="informacao">
                <p className="titulo">{produto.nome}</p>
                <p>R$: {produto.preco}</p>
                <div className="quantidade">
                    <Minus className="sinal" onClick={diminuirQuantidadeDoProdutoNoCarrinho}/>
                    <p>{produto.quantidade}</p>
                    <Plus className="sinal" onClick={aumentarQuantidadeDoProdutoNoCarrinho}/>
                    <div className="remover" onClick={removerProdutoNoCarrinho}>
                        <CircleX className="circlo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCarrinhoItem