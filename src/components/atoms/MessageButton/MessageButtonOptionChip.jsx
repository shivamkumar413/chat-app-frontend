export const MessageButtonOptionChip = ({name,Icon,handleClick})=>{
    return(
        <>
            <div 
                className="py-2 border-t border-gray-500 text-sm hover:bg-gray-900 w-30 flex items-center font-semibold justify-start cursor-pointer"
                onClick={handleClick}
            >
                <Icon className="size-4 mx-2"/>
                <span>{name}</span>
            </div>
        </>
    )
}