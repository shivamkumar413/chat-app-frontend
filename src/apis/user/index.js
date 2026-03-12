import { axiosInstance } from "@/config/axiosConfig";

export async function getUserByUsername({username,token}){
    console.log("username and token : ",username,token);
    try {
        const response = await axiosInstance.get(`/user/username?username=${username}`,
            {   
                headers : {
                    "x-access-token" : token
                }
            },
            
        )
        
        return response.data.data;
    } catch (error) {
        console.log("Error while fetching user by username : ",error);
        throw error;
    }
}