import { createContext, useState } from "react";

const videocallContext = createContext();

export const videocallContextProvider = ({children})=>{

    const [callerVideoFeed,setCallerVideoFeed] = useState(false);
   
    const [peers,setPeers] = useState({});
    const [incomingVC,setIncomingVC] = useState(false);

    return(
        <videocallContext.Provider 
            value={{
                callerVideoFeed,
                setCallerVideoFeed,
                setPeers,
                peers,
                incomingVC,
                setIncomingVC
            }}
        >
            {children}
        </videocallContext.Provider>
    )
}

export default videocallContext;