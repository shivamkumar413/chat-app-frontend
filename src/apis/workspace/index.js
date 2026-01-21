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
        return response?.data?.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const createWorkspace = async ({workspaceName,description,token})=>{
    try {
        console.log("Name at create ws : ",workspaceName)
        const response = await axiosInstance.post('/workspace/create',
            {
                workspaceName : workspaceName,
                description : description
            },
            {
                headers : {
                    "x-access-token" : token 
                }
            }
        )
        console.log("New ws : ",response)
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}