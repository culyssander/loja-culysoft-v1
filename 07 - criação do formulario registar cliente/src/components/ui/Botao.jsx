import './styles/Botao.css'

function Botao({className, children, ...props}) {
    return (
        <button className={`botao ${className}`} {...props}>{children}</button>
    )
}

export default Botao