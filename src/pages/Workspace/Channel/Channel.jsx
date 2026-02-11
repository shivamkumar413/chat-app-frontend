import { Editor } from "@/components/atoms/Editor/Editor";
import { MessageButton } from "@/components/atoms/MessageButton/MessageButton";
import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { useGetChannelById } from "@/hooks/apis/channel/useGetChannelById";
import { useGetChannelMessages } from "@/hooks/apis/message/useGetChannelMessages";
import { useChannelMessage } from "@/hooks/context/useChannelMessage";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const Channel = ()=>{

    const queryClient = useQueryClient()
    const { channelId } = useParams();
    const { channelData,isPending,error } = useGetChannelById(channelId)
    const { joinChannel } = useSocketHook()
    const { channelMessages,isSuccess } = useGetChannelMessages()
    const { messageList,setMessageList } = useChannelMessage()

    console.log("channel messages : ",channelMessages)

    useEffect(() => {
        queryClient.invalidateQueries('fetchchannelmessages');
    }, [channelId]);

    useEffect(()=>{
        if(isSuccess)
            setMessageList(channelMessages.reverse())
    },[channelMessages,isSuccess,channelId])

    useEffect(()=>{
        if(!channelId || isPending) return;
        joinChannel(channelId);
    },[isPending])
    // console.log("Channel data at channel : ",channelData)
    return(
        <div className="h-screen flex flex-col">

            {/* Channel
            {channelId} */}
            <ChannelHeader name={channelData?.name}/>

            <div className="flex-1 overflow-y-auto">
                {messageList?.map((message)=>{
                    return(
                        <>
                            {/* <div>{message?.body}</div> */}
                            <MessageButton message={message}/>
                        </>
                    )
                })}
            </div>

            <Editor />
        </div> 
    )
}