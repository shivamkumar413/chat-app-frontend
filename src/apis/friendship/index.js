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

export const getAllRecievedFriendRequest = async ({token})=>{
    try {
        const response = await axiosInstance.get(`friendship/incoming-pending`,
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )

        return response?.data?.data;
    } catch (error) {
        console.log("Errow while getting all recieved friend request : ",error);
        throw error;
    }
}

export const acceptFriendRequest = async({friendshipId,token})=>{
    console.log(friendshipId,token)
    try {
        const response = await axiosInstance.patch(`friendship/accept/${friendshipId}`,
            {},
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )

        return response?.data.data;
    } catch (error) {
        console.log("Error while accepting friend request : ",error);
        throw error;
    }
}