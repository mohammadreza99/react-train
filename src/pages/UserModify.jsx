import React, {useState} from "react";
import {Input} from "../components/Input";


const UserModify = () => {
    const [state, setState] = useState({
        name: '',
        phone: ''
    })
    const [error, setError] = useState({
        name: '',
        phone: ''
    })

    const onSubmit = (event) => {
        event.preventDefault()
        Object.entries(state).forEach(([key, value]) => {
            if (value.length === 0) {
                setError(prevState => ({
                    ...prevState,
                    [key]: "error"
                }))
            }
        })
        console.log(state)
    }

    const setValue = (value, key) => {
        setState(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleChange = (e) => {
        setValue(e.target.value, e.target.name)
    }

    return (
        <div className="container-fluid py-3">
            <h3>Add User</h3>
            <form className="row align-items-end row-cols-md-3" onSubmit={onSubmit}>
                <Input className="mb-3 mb-md-0" name="name" label="Name" onChange={handleChange} error={error}/>
                <Input className="mb-3 mb-md-0" name="phone" label="Phone" onChange={handleChange} error={error}/>
                <div>
                    <button type="submit" className="btn btn-primary d-block">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default UserModify;
