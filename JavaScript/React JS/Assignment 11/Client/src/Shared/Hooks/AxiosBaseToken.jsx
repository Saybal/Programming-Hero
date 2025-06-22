import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const instance = axios.create({
    baseURL: 'http://localhost:3000',
});
const AxiosBaseToken = () => {

    const { user } = useContext(AuthContext);
    
    instance.interceptors.request.use(

        (config) => {
            if (user && user.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
    return instance;
};

export default AxiosBaseToken;