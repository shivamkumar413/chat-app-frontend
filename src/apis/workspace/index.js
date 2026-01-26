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

export const getWorkspaceDetails = async ({workspaceId,token})=>{
    try {
        const response = await axiosInstance.get(`/workspace/${workspaceId}`,{
            headers : {
                "x-access-token" : token
            }
        })

        console.log("Response at get workspace details : ",response)
        return response?.data?.data
    } catch (error) {
        console.log("Error getting details of the workspace : ",error)
        throw error;
    }
}

export const getIsUserAdminOfWorkspace = async({workspaceId,token})=>{
    try {
    const response = await axiosInstance.get(`/user/${workspaceId}`,
        {
            headers : {
                "x-access-token" : token
            }
        })

        //console.log("Reseponse at is user admin of ws : ",response)
        return response?.data?.data;

    } catch (error) {
        console.log("Error at get is user admin of workspace : ",error)
        throw error;
    }
}

export const deleteWorkspace = async ({workspaceId,token})=>{
    try {   
        const response = await axiosInstance.delete(`/workspace/${workspaceId}`,
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )

        console.log("Response at deleting workspace api : ",response)
        return response?.data?.data

    } catch (error) {   
        console.log("Error while deleting the workspace : ",error)

    }
}

export const updateWorkspace = async ({workspaceId,workspaceName,token})=>{
    try {
        console.log("at workspace update api : ",workspaceId,workspaceName,token)
        const response = await axiosInstance.put(`/workspace/${workspaceId}`,
            {name : workspaceName},
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )
        console.log("Respone at update workspace api : ",response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error at ddelete workspace api : ",error);
        throw error;
    }
}