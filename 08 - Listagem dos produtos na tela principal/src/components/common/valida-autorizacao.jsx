import { Navigate, useLocation } from "react-router-dom";

function ValidaAutorizacao({estaLogado, usuario, children}) {
    const localizacao = useLocation()

    console.log(localizacao.pathname.includes('/regitro'));
    

    if (!estaLogado && !(localizacao.pathname.includes('/login') || !localizacao.pathname.includes('/regitro'))) {
        return <Navigate to='/auth/login'/>
    }

    if (estaLogado && localizacao.pathname.includes('/login') || localizacao.pathname.includes('/regitro') ) {
        if (usuario?.perfil === 'ADMIN'){
            return <Navigate to='/admin/dashboard'/>
        } else {
            return <Navigate to='/'/>
        }
    }

    if (estaLogado && usuario?.perfil !== 'ADMIN' && localizacao.pathname.includes('/admin')) {
        return <Navigate to='/nao-autorizado'/>
    }

    if (estaLogado && usuario?.perfil === 'ADMIN' && localizacao.pathname.includes('/shop')) {
        return <Navigate to='/admin/dashboard'/>
    }

    return <>{children}</>
}

export default ValidaAutorizacao