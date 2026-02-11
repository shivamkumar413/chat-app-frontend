import { createContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({children})=>{

    const [currentChannel,setCurrentChannel] = useState();
    const socket = io('http://localhost:3000');

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