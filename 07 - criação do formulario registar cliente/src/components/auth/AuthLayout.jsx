import { Link, Outlet } from "react-router-dom";
import logo from '../../img/culysoft-logo.png';

import './styles/auth-layout.css';

function AuthLayout() {
    return(
        <div className="auth-layout">
            <div className="capa">
                <h1>Bem-vindo a loja</h1>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}


export default AuthLayout