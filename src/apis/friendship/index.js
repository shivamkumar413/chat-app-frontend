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

export const getAllSentFriendRequest = async({token})=>{
    try {
        const response = await axiosInstance.get(`friendship/sent-pending`,
            {
                headers : {
                    "x-access-token" : token,
                }
            }
        )

        return response?.data?.data;
    } catch (error) {
        console.log("Error while getting all sent friend request : ",error);
        throw error;
    }
}

export const acceptFriendRequest = async({friendshipId,token})=>{
    //console.log(friendshipId,token)
    try {
        const response = await axiosInstance.patch(`friendship/accept/${friendshipId}`,
            {},
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )

        return response?.data?.data;
    } catch (error) {
        console.log("Error while accepting friend request : ",error);
        throw error;
    }
}

export const declineFriendRequest = async({friendRequestId,token})=>{
    console.log("token at decline frnd req : ",token);
    try {
        const response = await axiosInstance.delete(`/friendship/decline/${friendRequestId}`,
            {
                headers : {
                    "x-access-token" : token
                }
            }
        )

        return response?.data?.data;
    } catch (error) {
        console.log("Error while declining friend request : ",error);
        throw error;
    }
}

export const getAllFriends = async({token})=>{
    try {
        console.log("triggered get all friends : ");
        const response = await axiosInstance.get(`/friendship/friends`,
            {
                headers : {
                    "x-access-token" : token
                }
            }
        );
        console.log("response at get all friends : ",response?.data.data);
        
        return response?.data.data
    } catch (error) {
        console.log("Error while fetching all friends : ",error);
        throw error;
    }
}

export const getFriendDetailByfriendshipId = async({friendshipId,token})=>{
    try {
        const response = await axiosInstance.get(`/friendship/${friendshipId}/friend-detail`,
            {
                headers : {
                    "x-access-token" : token
                }
            }
        );
        return response?.data?.data;
    } catch (error) {
        console.log("Error while getting friend detail by id : ",error);
        throw error;
    }
}