import { axiosInstance } from "@/config/axiosConfig";

export const getChannelById = async(channelId,token)=>{
    try {
        const response = await axiosInstance.get(`/channel/${channelId}`,
            {
                headers : {
                    "x-access-token" : token,
                }
            }
        )

        console.log("Response at get channel by id : ",response);
        return response?.data?.data;
    } catch (error) {
        console.log("Error in api getChannelById : ",error);
        throw error;
    }
}