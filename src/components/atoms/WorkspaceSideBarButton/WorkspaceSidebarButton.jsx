export const WorkspaceSideBarButton = ({Icon,name})=>{
    return(
        <div className="border-b border-black h-20 w-20 flex flex-col items-center justify-center">
            <div>
                <Icon className=''/>
            </div>
            <span className="my-1">
                {name}
            </span>
        </div>
    )
}