import React, {Fragment, useState} from 'react';


const FormLogin = () => {
    const [datos, setDatos] = useState({
        username: '',
        pwd:''
    })
    const handleInputChange = (event) => {
        console.log("funciona")
    }

    render(){
        return(
            <Fragment>
                <div class="container">
                    <div class="espaciado-def row justify-content-center">
                        <div class="espaciado-login p-4 rounded">
                            <div class="">
                                <h2 class="text-center">Iniciar sesión</h2>
                                <div class="form rounded shadow p-3">
                                    <form method="POST" action="">
                                        <div class="form-group">
                                            <div>
                                                <label for="username"><b>Usuario</b></label>
                                                <input 
                                                type="text" 
                                                class="form-control mt-1" 
                                                placeholder="Ingrese su nombre de usuario" 
                                                name="username"
                                                onChange={handleInputChange} 
                                                required/>
                                            </div>
                                            <div>
                                                <label for="pwd" class="mt-1"><b>Contraseña</b></label>
                                                <input 
                                                type="password" 
                                                class="form-control" 
                                                placeholder="Ingrese su contraseña" 
                                                name="pwd"
                                                onChange={handleInputChange} 
                                                required/>
                                            </div>
                                            <button type="submit" value="submit" class="btn btn-success mt-3 w-100">Ingresar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default FormLogin;