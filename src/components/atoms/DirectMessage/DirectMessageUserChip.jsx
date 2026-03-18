export const DirectMessageUserChip = ({avatarSrc,username})=>{
    return(
        <div className="flex items-center border-b border-black py-2 cursor-pointer text-gray-300">
            <span className="bg-gray-300 mx-2 rounded-full">
                <img 
                    className="w-10 h-10"
                    src={avatarSrc} 
                    alt="" 
                />
            </span>
            <span className="text-lg font-mono">
                {username}
            </span>
        </div>
    )
}