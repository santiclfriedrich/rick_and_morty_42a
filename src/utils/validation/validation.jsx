const validation = (userData) => {
    const errors = {};

    if(!userData.email){
        errors.email = "Ingresa tu email"
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email = "Correo invalido"
    }
    if(userData.email.length >= 35){
        errors.email = "El correo ingresado no puede tener mas de 35 caracteres"
    }

    if(!/\d/.test(userData.password)){
        errors.password = "La contraseña debe contener una letra"
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors
}

export default validation