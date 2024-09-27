import Botao from '../ui/Botao';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Select from '../ui/Select';
import TextArea from '../ui/TextArea';

import './styles/formulario.css';

function Formulario({formularioControl, formularioDados, setFormularioDados, onSubmit, textoBotao}) {

    function renderizarComponentePeloTipo(controlItem) {
        let elemento = null
        let valor = formularioDados[controlItem.nome] || ''

        switch(controlItem.tipoDoComponente) {
            case 'input': elemento = (<Input
                    className={`input`}
                    type={controlItem.tipo}
                    placeholder={controlItem.placeholder}
                    id={controlItem.nome}
                    name={controlItem.nome}
                    value={valor}
                    onChange={ event => setFormularioDados({
                        ...formularioDados,
                        [controlItem.nome]: event.target.value
                    })}
                />); break
            case 'textarea': elemento = (<TextArea
                    placeholder={controlItem.placeholder}
                    id={controlItem.nome}
                    name={controlItem.nome}
                    value={valor}
                    onChange={ event => setFormularioDados({
                        ...formularioDados,
                        [controlItem.nome]: event.target.value
                    })}
            >
            </TextArea>); break
            case 'select': elemento = (<Select onChange={ event => setFormularioDados({
                ...formularioDados,
                [controlItem.nome]: event.target.value
            })} value={valor} >
                { 
                    controlItem.opcao  && controlItem.opcao.length > 0 ? 
                    controlItem.opcao.map(item => <option key={item.id} value={item.id}>{item.nome}</option>) 
                    : null
                }
            </Select>); break

            default: elemento = (<Input
                    type={controlItem.tipo}
                    placeholder={controlItem.placeholder}
                    id={controlItem.nome}
                    name={controlItem.nome}
                    value={valor}
                    onChange={ event => setFormularioDados({
                        ...formularioDados,
                        [controlItem.nome]: event.target.value
                    })}
                />); break
        }

        return elemento
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="formulario">
                {
                    formularioControl && formularioControl.length > 0 ?
                    formularioControl.map(controlItem => <div className='control'>
                        <Label>
                            {controlItem.titulo}
                        </Label>
                        {
                            renderizarComponentePeloTipo(controlItem)
                        }
                    </div>) : null
                }
            </div>
            <div className="wrapper">
                <Botao className='botao-formulario'>{textoBotao || 'Submit'}</Botao>
            </div>
        </form>
    )

}

export default Formulario


const control = [
    {
        titulo: '',
        nome: '',
        tipoDoComponente: 'input',
        tipo: 'text'
    }
]