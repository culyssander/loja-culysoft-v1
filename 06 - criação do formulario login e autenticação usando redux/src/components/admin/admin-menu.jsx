import { Link } from "react-router-dom"

import { BadgeDollarSign, Cog, LayoutDashboard, LogOut, ScanFace, ShoppingBasket, Users } from "lucide-react"
import logo from '../../img/culysoft-logo.png'

import './styles/admin-menu.css'

function AdminMenu() {
    return (
        <nav className="admin-menu">
            <ul>
                <li>
                    <Link>
                        <span className="icon"><img src={logo} alt="" /></span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><LayoutDashboard /></span>
                        <span className="texto">Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><ShoppingBasket /></span>
                        <span className="texto">Produtos</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><BadgeDollarSign /></span>
                        <span className="texto">Vendas</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><Users /></span>
                        <span className="texto">Usuarios</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><ScanFace /></span>
                        <span className="texto">Perfil</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><Cog /></span>
                        <span className="texto">Configuraçoes</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <span className="icon"><LogOut /></span>
                        <span className="texto">Sair</span>
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default AdminMenu