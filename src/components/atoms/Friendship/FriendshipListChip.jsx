export const FriendshipListChip = ({imgSrc,username})=>{
    return(
        <div 
            className="py-2 px-1 my-1 bg-gray-800 hover:bg-gray-700 hover:border transition-all rounded-md w-1/2 cursor-pointer flex items-center justify-between"
        >
            <span>
                <img 
                    className="w-10 h-10 mx-2"
                    src={imgSrc} alt="" />
            </span>
            
            <span
                className="text-gray-200 text-xl mx-2"
            >
                {username}
            </span>
        
        </div>
    )
}