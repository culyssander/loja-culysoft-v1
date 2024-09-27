import './styles/Select.css'

function Select({className, children, ...props}) {
    return (
        <select className={className} {...props}>
            {children}
        </select>
    )
}

export default Select