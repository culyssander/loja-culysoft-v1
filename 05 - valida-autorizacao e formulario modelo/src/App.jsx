import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/admin/admin-layout'
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

function App() {

    const props = {
        estaLogado: true,
        usuario: {
            perfil: 'CLIENTE'
        }
    }

    const {estaLogado, usuario} = props;

    return (
        <div>
            <Routes>
                <Route path='auth' >
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