export const Input = ({className, onChange, label, name, error}) => {
    function getId() {
        return 'id' + Math.random().toString(16).slice(2);
    }

    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input className="form-control"
                   name={name}
                   id={name}
                   onChange={onChange}/>
            {error && (
                <span style={{backgroundColor: "crimson", color: "palegreen"}}>
                    {error?.[name]}
                </span>
            )}
        </div>
    )
}
