import React, { useState } from 'react'
import './Signinup.scss'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Navbar from '../Navabar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const Signinup = () => {

    //window.location.reload()

    const [signin, setSignin] = useState(true)
    const [signup, setSignup] = useState(false)
    const [popup, setPopup] = useState(false)
    const [exist, setExist] = useState(false)
    const [route, setRoute] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const api_base = process.env.REACT_APP_API_URL
    //const api_base = 'https://real-estate-backend-yuae.onrender.com'

  


  





    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)


    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const signUpSchema = Yup.object({
        email: Yup.string().email().required("please enter your email"),
        password: Yup.string().min(4).required("please enter your password"),
    })


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            setLoading(true)
            sendDetails(values)
            action.resetForm()
        }
    })

    const sendDetails = async (formData) => {
        // setPopup(false)
        //console.log(api_base)
        let data = await (await fetch(`${api_base}${route}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email: formData.email,
                password: formData.password

            })
        })).json()

        if (data.message === "email already exist") {
            setExist(true)
            setLoading(false)
        } else if (data.message === "user created") {
            setLoading(false)
            navigate('/')
        } else if (data.message === "signed in") {
            setLoading(false)
            navigate('/')
            localStorage.setItem("user", JSON.stringify({
                email: data.email,
                loginID: data.loginID,
                token:data.token
            }))
            document.body.classList.remove('overlay')
        } else if (data.message === "password error") {
            setPassErr(true)
            setLoading(false)
        } else if (data.message === "email not registerd") {
            setEmailErr(true)
            setLoading(false)
        }
    }
    return (
        <>
            <Navbar login={false} selected={'signin'} bg='white' txtCol={'black'} hoverClass={'LightHover'} bs={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}/>
            <div className="signinup_container">
                <div className="signinupbox">
                    <div className="topbar">
                        <div className="signup" onClick={() => {
                            setSignin(false)
                            setSignup(true)

                        }} style={signin ? { background: '#00000017' } : {}}>
                            <p>signup</p>
                        </div>
                        <div className="signin" onClick={() => {
                            setSignin(true)
                            setSignup(false)
                        }} style={signup ? { background: '#00000017' } : {}}>
                            <p>signin</p>
                        </div>
                    </div>
                    {
                        signup && <div className="signupform">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} onClick={() => {
                                    setExist(false)
                                }} autoComplete='off' />
                                <p className='error'>{exist && 'email already exist'}</p>
                                <p className='error'>{errors.email && touched.email ? errors.email : null}</p><br /><br />

                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete='off' />
                                <p className='error'> {errors.password && touched.password ? errors.password : null}</p><br /><br />


                                <button onClick={() => {
                                    setRoute('/signup')
                                }} disabled={loading}>
                                    <p>Sign up</p><ClipLoader color="#ffffff" size={15} loading={loading} />
                                </button>
                            </form>
                        </div>
                    }

                    {
                        signin && <div className="signinform">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} onClick={() => {
                                    setExist(false)
                                    setEmailErr(false)
                                }} autoComplete='off' />
                                <p className='error'>{emailErr && 'Email not Registerd'}</p>
                                <p className='error'>{errors.email && touched.email ? errors.email : null}</p><br /><br />

                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete='off' onClick={() => {
                                    setPassErr(false)
                                }} />
                                <p className='error'>{passErr && 'Password error'}</p>
                                <p className='error'> {errors.password && touched.password ? errors.password : null}</p><br /><br />


                                <button onClick={() => {
                                    setRoute('/signin')
                                }} disabled={loading}>
                                    <p>Sign In</p><ClipLoader color="#ffffff" size={15} loading={loading} />
                                </button>

                                <Link to={'/sendRegEmail'}> <p>Forget password?</p></Link>

                            </form>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Signinup