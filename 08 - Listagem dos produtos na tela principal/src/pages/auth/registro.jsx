import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Formulario from "../../components/common/formulario"
import { formularioControlRegistro } from "../../config/formulario-config"

import { useDispatch } from "react-redux"
import { registroUsuario } from "../../redux/slice/auth-slice"
import { toastErro, toastInformacao, toastSucesso } from "../../util/toasters"
import { verificaInput } from "../../util/verificacao"
import './styles/registro.css'

const estadoInicialDoFormulario = {
    nome: '',
    email: '',
    senha: ''
}

function Registro() {

    const [formularioDados, setFormularioDados] = useState(estadoInicialDoFormulario)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(formularioDados);

    const {nome, email, senha} = formularioDados
    

    function onSubmit(event) {
        event.preventDefault()

        if (verificaInput(nome) || verificaInput(email) || verificaInput(senha)) return toastInformacao('Campos Obrigatorios')


            dispatch(registroUsuario(formularioDados)).then(data => {
                if (data?.payload?.perfil === 'CLIENTE') {
                    toastSucesso('Usuario criado com sucesso')
                    navigate('/auth/login')
                } else if (data?.payload?.status === 400) {
                    toastErro(data?.payload?.titulo)
                } else {
                    toastErro('Error ao criar usuario')
                }
            })
    }

    return (
        <div className="registro">
            <div className="registro-capa"></div>
            <div className="registro-form">
                <div className="registro-form-info">
                    <h2>Cadastre-se na loja Culysoft</h2>
                    <p>Já tem uma conta? <Link to='/auth/login'>Entrar</Link></p>
                </div>
                <Formulario
                    formularioControl={formularioControlRegistro}
                    formularioDados={formularioDados}
                    setFormularioDados={setFormularioDados}
                    onSubmit={onSubmit}
                    textoBotao='Cadastre-se'
                />
                <div className="registro-rodape">
                    <p>Ao se cadastrar, você concorda com os <Link>Termos e a Política de privacidade.</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Registro