export const Input = ({onChange,label,name,error}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input className="form-control" name={name} id={name}
                   onChange={onChange}/>
            {error && (
                <h1 style={{backgroundColor:"crimson",color:"palegreen"}}>
                    {error?.[name]}
                </h1>
            )}
        </div>
    )
}
