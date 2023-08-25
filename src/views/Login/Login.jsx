/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import validation from "../../utils/validation/validation"

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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" placeholder="Email..." onChange={handleChange} value={userData.email} />
                {errors.email && <span>{errors.email}</span>}

                <label htmlFor="Password">Contraseña</label>
                <input type="text" name="password" placeholder="Password..." onChange={handleChange} value={userData.password} />
                {errors.password && <span>{errors.password}</span>}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;