import { useChannelMessage } from "@/hooks/context/useChannelMessage";
import { useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({children})=>{

    const [currentChannel,setCurrentChannel] = useState();
    const { messageList,setMessageList } = useChannelMessage();
    const queryClient = useQueryClient()

    const socket = io('http://localhost:3000');

    socket.on('message',(data)=>{
        console.log("New message recieved : ",data);
        console.log("message list before change : ",messageList);
        setMessageList([...messageList,data]);
        console.log("message list after change : ",messageList);
        
        queryClient.invalidateQueries('fetchchannelmessages');
        //console.log(messageList)
    })

    async function joinChannel(channelId){
        socket.emit('join-room',{channelId},(data)=>{
            console.log('Successfully joined the channel', data);
            setCurrentChannel(data?.data);
        });
    }

    async function SendMessage({channelId,workspaceId,messageContent,senderId}){
        socket.emit('message',{
            body : messageContent,
            senderId,
            workspaceId,
            channelId
        });
    }

    return(
        <SocketContext.Provider value={{currentChannel,joinChannel,SendMessage}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;