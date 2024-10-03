import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/admin/admin-layout'
import AuthLayout from './components/auth/AuthLayout'
import ValidaAutorizacao from './components/common/valida-autorizacao'
import AdminConfig from './pages/admin/admin-config'
import AdminDashboard from './pages/admin/admin-dashboard'
import AdminPerfil from './pages/admin/admin-perfil'
import AdminProdutos from './pages/admin/admin-produtos'
import AdminUsuarios from './pages/admin/admin-usuarios'
import AdminVendas from './pages/admin/admin-vendas'
import Login from './pages/auth/login'
import Registro from './pages/auth/registro'
import PaginaNaoEncontrada from './pages/not-found/nao-encontrado'
import SemAutorizacao from './pages/sem-autorizacao/sem-autorizacao'
import ShoppingCheckout from './pages/shopping/shopping-checkout'
import ShoppingCompras from './pages/shopping/shopping-compras'
import ShoppingHome from './pages/shopping/shopping-home'
import ShoppingListagem from './pages/shopping/shopping-listagem'
import ShoppingObrigado from './pages/shopping/shopping-obrigado'
import ShoppingPerfil from './pages/shopping/shopping-perfil'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import CarregarPagina from './components/common/carregar-pagina'
import ShoppingLayout from './components/shopping/shoppingLayout'
import { validarUsuarioLogado } from './redux/slice/auth-slice'

function App() {

    const {estadCarragado, estaLogado, usuario} = useSelector(state => state.auth);
    const dispatch = useDispatch()

    console.log(estaLogado, usuario);
    
    useEffect(() => {
        dispatch(validarUsuarioLogado())
    }, [dispatch])

    if (estadCarragado) {
        return <CarregarPagina/>
    }

    return (
        <div>
            <Routes>
                <Route path='auth' element={<ValidaAutorizacao estaLogado={estaLogado} usuario={usuario}><AuthLayout/></ValidaAutorizacao>} >
                    <Route path='login' element={<Login/>}/>
                    <Route path='registro' element={<Registro/>}/>
                </Route>

                <Route path='admin' element={<ValidaAutorizacao estaLogado={estaLogado} usuario={usuario} ><AdminLayout/></ValidaAutorizacao>}>
                    <Route path='dashboard' element={<AdminDashboard/>}/>
                    <Route path='produtos' element={<AdminProdutos/>}/>
                    <Route path='vendas' element={<AdminVendas/>}/>
                    <Route path='usuarios' element={<AdminUsuarios/>}/>
                    <Route path='perfil' element={<AdminPerfil/>}/>
                    <Route path='configuracao' element={<AdminConfig/>}/>
                </Route>

                <Route path='shop' element={<ValidaAutorizacao estaLogado={estaLogado} usuario={usuario}>
                    <ShoppingLayout/>
                </ValidaAutorizacao>}>
                    <Route path='perfil' element={<ShoppingPerfil/>}/>
                    <Route path='checkout' element={<ShoppingCheckout/>}/>
                    <Route path='compras' element={<ShoppingCompras/>}/>
                    <Route path='obrigado' element={<ShoppingObrigado/>}/>
                </Route>

                <Route path='/' element={<ShoppingHome/>}/>
                <Route path='listagens' element={<ShoppingListagem/>}/>
                <Route path='*' element={<PaginaNaoEncontrada/>}/>
                <Route path='nao-autorizado' element={<SemAutorizacao/>}/>

            </Routes>
        </div>
    )
}

export default App