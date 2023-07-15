import axios, { AxiosError } from "axios";
import { AuthTokenError } from './errors/AuthTokenError';
import { removeAccessToken } from "../contexts/AuthContext";

export function setupAPIClient(){

    const api = axios.create({
        baseURL: 'http://localhost:3334/',
        headers:{
            Authorization: `Bearer ${localStorage.getItem('@access_token')}`
        }  
    });

    api.interceptors.response.use(response =>{
        return response;
    },(error: AxiosError) =>{
        if(error.response?.status === 401){
            
            if(typeof window !== undefined){
                removeAccessToken();
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(error)
    })

    return api;
}