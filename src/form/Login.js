import React, { useState } from 'react';
import UseHandleChangeInput from '../customHook/form/UseHandleChangeInput';

export default function Login() {
    const nameInput = {
        fullname: "",
        email: "",
        hobby: false
    }
    const { value, handleInputChange } = UseHandleChangeInput(nameInput)
    const [nameError, setNameError] = useState(nameInput);
    console.log('value: ', value);
    const handleSubmitForm = e => {
        e.preventDefault();
        setNameError(nameInput);
        if (value?.fullname === '') {
            setNameError({
                ...nameError,
                fullname: "Fullname khong duoc de trong"
            })
        }
    }
    return (
        <div className='container'>
            <form class="form-group" onSubmit={handleSubmitForm}>
                <div>
                    <input type="text" name="fullname" id="" class="form-control" placeholder=""
                        onChange={handleInputChange}
                        aria-describedby="helpId" />
                    <span>{nameError.fullname}</span>
                </div>
                <div>
                    <input type="text" name="email" id="" class="form-control" placeholder=""
                        onChange={handleInputChange}
                        aria-describedby="helpId" />
                    <span>{nameError.email}</span>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="hobby" id
                            onChange={handleInputChange} defaultValue="checkedValue" defaultChecked />
                        Display value
                    </label>
                </div>
                <button className='btn btn-success' type='submit'>Submit</button>
            </form>
        </div>
    )
}
