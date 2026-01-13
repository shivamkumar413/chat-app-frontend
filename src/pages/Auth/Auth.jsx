export const Auth = ({children})=>{
    return(
        <div className="w-full min-h-screen bg-[#0F172A] flex justify-center items-center">
            <div className="md:h-auto md:w-105">
                {children}
            </div>
        </div>
    )
}