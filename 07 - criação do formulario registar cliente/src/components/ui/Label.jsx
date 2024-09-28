function Label ({ className,children, ...props}) {
    return <label className={className} {...props}>{children}</label>
}

export default Label