import { useEffect, useRef } from "react"

export const VideoFeed = ({stream})=>{

    const videoRef = useRef();
    useEffect(()=>{
        if(videoRef.current && stream){
            videoRef.current.srcObject = stream;
        }
    },[stream])
    return(
        <>
            <video
                ref={videoRef}
                autoPlay
                width={'200px'}
                className="z-10"
            />

        </>
    )
}