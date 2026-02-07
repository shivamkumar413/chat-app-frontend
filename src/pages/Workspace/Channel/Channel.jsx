import { ChannelHeader } from "@/components/molecules/Channel/ChannelHeader";
import { useGetChannelById } from "@/hooks/apis/channel/useGetChannelById";
import { useParams } from "react-router-dom"

export const Channel = ()=>{

    const { channelId } = useParams();
    const { channelData,isPending,isSuccess,error } = useGetChannelById(channelId)
    // console.log("Channel data at channel : ",channelData)
    return(
        <>
            Channel
            {channelId}
            <ChannelHeader name={channelData?.name}/>

        </>
    )
}