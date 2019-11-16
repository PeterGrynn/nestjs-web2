import React, { useState } from 'react';
import axios from 'axios';
import {
    getAccessToken,
    isLoginGood,
    isPassGood
} from '../validators/login.validators';
import { URL } from '../URL/serverURL';

const Login = () => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState(false);

     const handleSubmit = async () => {
        if(isLoginGood(login) && isPassGood(pass)){
            console.log(await getAccessToken(login,pass));
        } else {
            setErr(true);
            console.log(err)
        }
    }

    const handleLogin = e => {
        setLogin(e.target.value)
    }

    const handlePass = e => {
        setPass(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                Login: <input 
                            type="text" 
                            onChange={handleLogin}></input>
                Hasło: <input 
                            type="password"    
                            onChange={handlePass}></input>
                <input 
                    type="submit"></input>
            </form>
            {
            err 
            ? 
            <div>
                Podano złe hasło
            </div> 
            : 
            <div>
                
            </div>}
        </div>
    )
}

export default Login;