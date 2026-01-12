import { axiosInstance } from "@/config/axiosConfig.js";

export const userSignup = async ({email,username,password})=>{
    try {
        const response = await axiosInstance.post('/user/signup',{
            email,
            username,
            password
        })
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const userSignin = async ({email,password})=>{
    try {
        const response = await axiosInstance.post('/user/signin',{
            email,
            password
        })
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}