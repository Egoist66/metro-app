const Form = ({children}) => {
    return (
        <form onSubmit={e => e.preventDefault()}  className="form">
            {children}
        </form>
    )
}

export default Form