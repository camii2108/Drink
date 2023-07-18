import {useState, useEffect, useContext, createContext} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { userRegister } from "../services/user.service";
import { WindowRounded } from "@mui/icons-material";

const AuthContext = createContext();

function AuthProvider ({children} ) {

const navigate = useNavigate();
const storedToken = localStorage.getItem("_token");
useEffect(()=>{
    if(storedToken)
    
}, [])

function register (data) {
    userRegister(data)
    .then((res)=> {
        if(res.ok){
            alert(res.message)
            setTimeout(()=> {
                navigate("/login")
            }, 1000)
        }else{
            return Promise.reject(res)
        }
    })
    .catch(error => alert(JSON.stringify(error)))
}

function login (data) {
    userLogin(data)
    .then((res)=> {
        if(res.ok){
            window.localStorage.setItem("_token", res.token);
            const decodedToken = res.token ? jwt_decoded(res.token) : null;
            const { user } = decodedToken ? decodedToken.payload : null;
            setCurrentUser(user);
            return navigate ("/");


            setTimeout(()=> {
                navigate("/login")
            }, 1000)
        }else{
            return Promise.reject(res)
        }
    })
    .catch(error => alert(JSON.stringify(error)))
}

    const values = {

    }
   
    return (
        <AuthContext.Provider value={values}>
        {children}
        </AuthContext.Provider> 
    )
}

export {AuthContext, AuthProvider}