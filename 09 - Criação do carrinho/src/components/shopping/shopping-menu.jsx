import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../img/culysoft-logo.png'
import desconhecido from '../../img/perfil-conta-desconhecido.jpg'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizaPagina } from '../../redux/slice/carrinho.slice'
import { buscaTodasCategorias } from '../../redux/slice/categorias-slice'
import ShoppingCarrinho from './shopping-carrinho'
import './styles/shopping-menu.css'

function ShoppingMenu() {
    const {estaLogado, usuario} = useSelector(state => state.auth);
    const  {produtos} = useSelector(state => state.carrinhos)
    const dispatch = useDispatch()
    const [categorias, setCategorias] = useState([]) 
    const [estaVisivel, setEstaVisivel] = useState(false)

    useEffect(() => {
        dispatch(buscaTodasCategorias()).then (data => setCategorias(data.payload))
    }, [dispatch])

    function abrirCarrinho() {
        if (produtos.length > 0)
            setEstaVisivel(!estaVisivel)
    }

    useEffect(() => {
        if (produtos && produtos.length > 0) {
            sessionStorage.setItem('produtos', JSON.stringify(produtos))
        }
    }, [produtos])

    useEffect(() => {
        const produtoStorage = JSON.parse(sessionStorage.getItem('produtos'))
        if (produtoStorage && produtoStorage.length > 0) {
            dispatch(actualizaPagina(produtoStorage))
        }
    }, [])

    return (
        <div className="shopping-menu">
            <div className="logo">
                <Link to='/'><img src={logo} alt="Logo culysoft" width={600}/></Link>
            </div>
            <ul>
                {
                    categorias.map(opcao => <li key={opcao.id}><Link>{opcao.nome}</Link></li>)
                }
            </ul>
            <div className="shopping-menu-usuario">
                <div className="carrinho" onClick={abrirCarrinho}>
                    <p>{produtos.length === 0 ? '' : produtos.length }</p>
                    <ShoppingCart/>
                </div>
                {
                    estaLogado ? <img src={usuario?.fotoUrl ? usuario?.fotoUrl : desconhecido} width={300} /> : <Link to='/auth/login'>Login</Link>
                }
            </div>
            {
                estaVisivel && <ShoppingCarrinho estaVisivel={estaVisivel} setEstaVisivel={setEstaVisivel}/>
            }
        </div>
    )
}
 
export default ShoppingMenu