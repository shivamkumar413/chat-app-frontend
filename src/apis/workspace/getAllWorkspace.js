import { axiosInstance } from "@/config/axiosConfig";

export const getAllWorkspace = async (token)=>{
    console.log("Fetch all workspace triggered")
    try {
        
        const response = await axiosInstance.get('/workspace/allWorkspace',
        {
           headers : {
            'x-access-token' : token
           }
        })
        console.log("Response : ",response)
        return response.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}