import { Logs, Search } from "lucide-react"

import fotoPerfil from '../../img/Quitumba.jpg'

import './styles/admin-header.css'

function AdminHeader() {
    return (
        <header className="admin-header">
            <div className="toggle">
                <Logs size={30}/>
            </div>

            <div className="pesquisar">
                <label htmlFor="pesquisar">
                    <input type="text" placeholder="Pesquisa por aqui" id="pesquisar"/>
                    <Search className="icon"/>
                </label>
            </div>
            <div className="usuario">
                <img src={fotoPerfil} width={500}/>
            </div>
        </header>
    )
}

export default AdminHeader