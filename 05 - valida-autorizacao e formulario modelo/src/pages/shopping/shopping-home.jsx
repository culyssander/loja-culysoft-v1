import { useState } from "react"
import Formulario from "../../components/common/formulario"

function ShoppingHome() {

    const inicioDoFormulario = {
        email: '',
        senha: ''
    }

    const control = [
        {
            nome: 'email',
            titulo: 'Email *',
            placeholder: 'Digite o Email',
            tipoDoComponente: 'input',
            tipo: 'email',
            opcao: []
        },
        {
            nome: 'senha',
            titulo: 'Senha *',
            placeholder: 'Digite o senha',
            tipoDoComponente: 'input',
            tipo: 'password'
        }
    ]

    const [formularioDados, setFormularioDados] = useState(inicioDoFormulario)

    console.log(formularioDados);
    

    function onSubmit() {
        console.log("Clicou no botao");
        
    }

    return (
        <div>
            Pagina Inicial

            <Formulario
                formularioControl={control}
                formularioDados={formularioDados}
                setFormularioDados={setFormularioDados}
                onSubmit={onSubmit}
                textoBotao={'Testando'}
            />
        </div>
    )
}

export default ShoppingHome