import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../img/culysoft-logo.png'
import desconhecido from '../../img/perfil-conta-desconhecido.jpg'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscaTodasCategorias } from '../../redux/slice/categorias-slice'
import './styles/shopping-menu.css'

function ShoppingMenu() {
    const {estaLogado, usuario} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [categorias, setCategorias] = useState([]) 

    useEffect(() => {
        dispatch(buscaTodasCategorias()).then (data => setCategorias(data.payload))
    }, [dispatch])

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
                <div className="carrinho">
                    <p>4</p>
                    <ShoppingCart/>
                </div>
                {
                    estaLogado ? <img src={usuario?.fotoUrl ? usuario?.fotoUrl : desconhecido} width={300} /> : <Link to='/auth/login'>Login</Link>
                }
            </div>
        </div>
    )
}
 
export default ShoppingMenu