import { useState } from "react";


export default function UseHandleChangeInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleInputChange = (e) => {
        const type = e.target.type;
        setValue({
            ...value,
            [e.target.name]: type === 'checkbox' ? e.target.checked : e.target.value
        })
    }
    return {
        value,
        handleInputChange
    }
}

