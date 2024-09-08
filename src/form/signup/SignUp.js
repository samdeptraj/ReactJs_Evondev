import React from 'react'
import './style.css'
import { useFormik } from 'formik'
import *  as Yup from 'yup';

const validation = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too short').max(50, 'To long').required('firstName is require'),
    lastName: Yup.string().min(2, 'Too short').max(50, 'To long').required('lastName is require')
})
export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            intro: ''
        },
        validationSchema: validation,
        onSubmit: values => {
            console.log('values: ', values);
        }
    })

    console.log("formik: ", formik);
    return (
        <div className="container container-signup">
            <h3>Login form formik</h3>
            <div className="form-container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" name="firstName"
                            {...formik.getFieldProps("firstName")}
                            placeholder="Enter your first name" />
                        <small className="form-text">{formik.errors.firstName}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" name="lastName"
                            {...formik.getFieldProps("lastName")}
                            placeholder="Enter your last name" />
                        <small className="form-text">{formik.errors.lastName}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="intro">Intro</label>
                        <textarea className="form-control" name="intro" rows={3} placeholder="Introduce yourself..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">Your job</label>
                        <select className="form-control" id="job">
                            <option>Select your job</option>
                            <option>Developer</option>
                            <option>Designer</option>
                            <option>Manager</option>
                        </select>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="terms" />
                        <label className="form-check-label" htmlFor="terms">I accept the terms and conditions</label>
                    </div>
                    <button type="submit" className="btn btn-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
