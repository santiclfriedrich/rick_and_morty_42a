/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import validation from "../../utils/validation/validation"
import style from './Login.module.css'
import logorick from '../../assets/descarga.png'

const Login = ({login}) => {

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(userData)
        if(!errors.email && !errors.password){
            login(userData)
        } else {
            alert('Incorrect data')
        }
    }

    return(
        <div className={style.loginContainer}>
            <div className={style.image}>
            <img src={logorick} alt="logo" />
            </div>
            <form onSubmit={handleSubmit} className={style.loginForm}>
                <label htmlFor="Email" className={style.labelForm}>Email</label>
                <input type="text" name="email" placeholder="Email..." onChange={handleChange} value={userData.email} className={style.inputForm} />
                {errors.email && <span className={style.errorsForm} >{errors.email}</span>}

                <label htmlFor="Password" className={style.labelForm} >Contraseña</label>
                <input type="text" name="password" placeholder="Password..." onChange={handleChange} value={userData.password} className={style.inputForm} />
                {errors.password && <span className={style.errorsForm}>{errors.password}</span>}

                <button className={style.btnForm}>Submit</button>
            </form>
        </div>
    )
}

export default Login;