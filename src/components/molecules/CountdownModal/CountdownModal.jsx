import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCountdownModalContextHook } from "@/hooks/context/CountdownModalContextHook"
import { useEffect, useRef, useState } from "react"

export const CountdownModal = ()=>{

    const { openCountdownModal,setCountdownModal } = useCountdownModalContextHook()


    const dayRef = useRef();
    const hourRef = useRef();
    const minuteRef = useRef();
    const secondRef = useRef();

    useEffect(()=>{
        if(!hourRef.current || !minuteRef.current || !dayRef.current || !secondRef.current) return;

        if(hourRef.current && minuteRef.current && dayRef.current && secondRef.current){

            setInterval(()=>{
                const futureDate = new Date('February 28 , 2026').getTime();
                const currentDate = new Date().getTime();

                let timems = futureDate - currentDate;

                let days = Math.floor(timems / (1000 * 3600 * 24));
                let hours = Math.floor( (timems % (1000 * 3600 * 24))/(1000 * 3600) );
                let minutes = Math.floor( (timems % (1000 * 3600)) /(1000 * 60) );
                let seconds = Math.floor( (timems % (1000 * 60)) / (1000) )
                // console.log("hours : ",seconds)
                if(dayRef.current) dayRef.current.innerHTML = days;
                if(hourRef.current) hourRef.current.innerHTML = hours;
                if(minuteRef.current) minuteRef.current.innerHTML = minutes;
                if(secondRef.current) secondRef.current.innerHTML = seconds;
            },1000);

        }

            
        
        
    },[hourRef.current,minuteRef.current,dayRef.current,secondRef.current])

    return (
        <>
            <Dialog
                open={openCountdownModal}
                onOpenChange={()=>setCountdownModal(!openCountdownModal)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            We are still working on this feature
                        </DialogTitle>

                        <DialogDescription>
                            This feature will be up and working in 
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex items-center gap-x-4 justify-center">
                        <div className="flex flex-col justify-center">
                            <div
                                className="shadow-xl bg-white border w-15 h-15 rounded-md text-center flex items-center justify-center font-semibold text-xl"
                                ref={dayRef}
                            >

                            </div>
                            <span className="bg-white w-15 rounded-md border shadow-xl text-center my-1 font-semibold text-sm">days</span>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div
                                className="shadow-xl bg-white border w-15 h-15 rounded-md text-center flex items-center justify-center text-xl font-semibold"
                                ref={hourRef}
                            >
                                
                            </div>
                            <span className="bg-white w-15 rounded-md border shadow-xl text-center my-1 font-semibold text-sm">hours</span>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div
                                className="shadow-xl bg-white border w-15 h-15 rounded-md text-center flex items-center justify-center text-xl font-semibold"
                                ref={minuteRef}
                            >
                                
                            </div>  
                            <span className="bg-white w-15 rounded-md border shadow-xl text-center my-1 font-semibold text-sm">mins</span>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div
                                className="shadow-xl bg-white border w-15 h-15 rounded-md text-center flex items-center justify-center text-xl font-semibold"
                                ref={secondRef}
                            >
                                
                            </div>
                            <span className="bg-white w-15 rounded-md border shadow-xl text-center my-1 font-semibold text-sm">secs</span>
                        </div>
                    </div>
                    
                </DialogContent>
            </Dialog>
        </>
    )
}