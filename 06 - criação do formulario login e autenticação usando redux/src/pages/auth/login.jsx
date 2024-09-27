import { useState } from "react"
import { Link } from "react-router-dom"
import Formulario from "../../components/common/formulario"
import { formularioControlLogin } from "../../config/formulario-config"

import { useDispatch } from "react-redux"
import Cookies from "universal-cookie"
import { loginUsuario } from "../../redux/slice/auth-slice"
import { toastErro, toastInformacao, toastSucesso } from "../../util/toasters"
import { verificaInput } from "../../util/verificacao"
import './styles/login.css'

const estadoInicialDoFormulario = {
    email: '',
    senha: ''
}

function Login() {

    const [formularioDados, setFormularioDados] = useState(estadoInicialDoFormulario)
    const dispatch = useDispatch()
    const cookeies = new Cookies()

    console.log(formularioDados);

    const {email, senha} = formularioDados
    

    function onSubmit(event) {
        event.preventDefault()

        if (verificaInput(email) || verificaInput(senha)) return toastInformacao('Campos Obrigatorios')

        const expires = new Date()
        expires.setDate(expires.getDate+1)

        dispatch(loginUsuario(formularioDados)).then(data => {

            if (data.payload?.status === 200) {
                const TOKEN  = data.payload?.token
                cookeies.set('TOKEN', TOKEN)
                toastSucesso('Login com sucesso')
                setFormularioDados(estadoInicialDoFormulario)
            } else if (data.payload?.titulo) {
                toastErro(data.payload?.titulo)
            } else {
                toastErro('Servidor indisponivel')
            }
        })
    }

    return (
        <div className="login">
            <div className="login-capa"></div>
            <div className="login-form">
                <div className="login-form-info">
                    <h2>Entrar</h2>
                    <p>Aproveita os nossos produtos em promoção</p>
                </div>
                <Formulario
                    formularioControl={formularioControlLogin}
                    formularioDados={formularioDados}
                    setFormularioDados={setFormularioDados}
                    onSubmit={onSubmit}
                    textoBotao='Entrar'
                />
                <div className="login-rodape">
                    <p>Não tem uma conta? <Link to='/auth/registro'>Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login