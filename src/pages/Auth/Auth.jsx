export const Auth = ({children})=>{
    return(
        <div className="w-full min-h-screen bg-[#0F172A] flex justify-center items-center">
            <div className="md:h-auto sm:w-105 w-auto">
                {children}
            </div>
        </div>
    )
}