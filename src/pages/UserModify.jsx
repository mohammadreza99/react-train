import React, {useState} from "react";
import {Input} from "../components/Input";


const UserModify = () => {
    const [state, setState] = useState({
        name: '',
        phone: ''
    })

    const handleChange = (e) => {
        setValue(e.target.value, e.target.name)
    }

    const setValue = (value, key) => {
        setState(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="container-fluid py-3">
            <h3>Add User</h3>
            <form className="row align-items-end row-cols-md-3" onSubmit={onSubmit}>
                <Input className="mb-3 mb-md-0" name="name" label="Name" onChange={handleChange}/>
                <Input className="mb-3 mb-md-0" name="phone" label="Phone" onChange={handleChange}/>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default UserModify;
