import './styles/TextArea.css'

function TextArea({className, children, ...props}) {
    return <textarea 
        className={`${className}`}
        {...props}
    >{children}</textarea>
}

export default TextArea