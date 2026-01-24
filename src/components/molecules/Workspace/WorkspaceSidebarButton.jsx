export const WorkspaceSideBarButton = ({Icon,name,onClickHandler})=>{
    return(
        <div 
            className="border-b border-black h-18 w-25 flex flex-col items-center justify-center"
            onClick={onClickHandler}
        >
            <div>
                <Icon />
            </div>
            <span className="my-1 text-xs font-semibold">
                {name}
            </span>
        </div>
    )
}