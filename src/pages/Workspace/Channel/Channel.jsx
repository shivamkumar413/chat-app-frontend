import { Editor } from "@/components/atoms/Editor/Editor";
import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { useGetChannelById } from "@/hooks/apis/channel/useGetChannelById";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const Channel = ()=>{

    const { channelId } = useParams();
    const { channelData,isPending,isSuccess,error } = useGetChannelById(channelId)
    const { joinChannel } = useSocketHook()

    useEffect(()=>{
        if(!channelId || isPending) return;
        joinChannel(channelId);
    },[isPending])
    // console.log("Channel data at channel : ",channelData)
    return(
        <div className="h-screen bg-green-200 flex flex-col">

            {/* Channel
            {channelId} */}
            <ChannelHeader name={channelData?.name}/>

            <div className="flex-1 overflow-y-auto">
                {/* All messages go here */}
            </div>

            <Editor />
        </div> 
    )
}