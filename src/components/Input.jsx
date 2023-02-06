export const Input = ({onChange, label, name}) => {
    return (
        <div className="mb-3">
            {label && <label htmlFor={name} className="form-label">{label}</label>}
            <input className="form-control" name={name} id={name} onChange={onChange}/>
        </div>
    )
}
