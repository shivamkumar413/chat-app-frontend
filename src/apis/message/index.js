import { axiosInstance } from "@/config/axiosConfig";

export async function getPaginatedMessage(channelId,token){
    try {
        const response = await axiosInstance.get(`/message/${channelId}`,
            {
                headers : {
                    "x-access-token" : token
                }
            }
        );

        console.log("Response at get paginated message : ",response);
        return response?.data?.data
    } catch (error) {
        console.log('Error while getting paginated messages : ',error);
        throw error;
    }
}