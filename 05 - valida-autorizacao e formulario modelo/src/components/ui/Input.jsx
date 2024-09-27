import './styles/Input.css'

function Input({ className, type, ...props }) {
    return (
        <input type={type} className={`input ${className}`} {...props} />
    )
}

export default Input