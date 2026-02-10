import { createContext, useState } from "react";

const countdownModalContext = createContext();

export const countdownContextProvider = ({children})=>{
    const [openCountdownModal,setCountdownModal] = useState(false);

    return (
        <countdownModalContext.Provider value={{openCountdownModal,setCountdownModal}}>
            {children}
        </countdownModalContext.Provider>
    )
}

export default countdownModalContext;