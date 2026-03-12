import { axiosInstance } from "@/config/axiosConfig"

export const sendFriendRequest = async({requesterId,recipientId,token})=>{
    try {
        const response = await axiosInstance.post(`/friendship/send`,
            {
                requesterId,
                recipientId,
            },
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )

        return response?.data?.data;
    } catch (error) {
        console.log('Error while sending friend request : ',error);
        throw error;
    }
}