import axios from 'axios';
import { URL } from '../URL/serverURL';

export const isLoginGood = login => login ? true : false;

export const isPassGood = pass => {
    if(pass.length > 5) return true;

    return false;
}

export const getAccessToken = async (login, password) => {
    console.log(login + password);
    if(isLoginGood(login) && isPassGood(password)){
        const {data} = await axios.post( URL.login, {
            username: login,
            password: password
        })

        return data.access_token;
    } else {
        return 'Bad password';
    }
    
}