import { getUserByUsername } from "@/apis/user";
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useSendfriendRequest } from "@/hooks/apis/friendship/useSendfriendRequest";
import { useAuth } from "@/hooks/context/AuthContextHook";
import { useSocketHook } from "@/hooks/context/useSocketHook";
import { useQueryClient } from "@tanstack/react-query";
import { SearchIcon, UserPlus } from "lucide-react"
import { useState } from "react"

export const AddFriendsModal = ({open,setOpen})=>{

    const [inputText,setInputText] = useState("");
    const [searchData,setSearchData] = useState([])
    const queryClient = useQueryClient();
    const { sendNotificationToRecipient } = useSocketHook();
    const { sendFriendReqMutation,isPending,isSuccess,error } = useSendfriendRequest()
    const { auth } = useAuth();

    async function handleFriendRequestSendClick(recipientId){
        await sendFriendReqMutation({
            requesterId : auth?.user?._id,
            recipientId : recipientId,
            token : auth?.token,
        })

        await sendNotificationToRecipient(
            {
                requesterId : auth?.user?._id,
                recipientId : recipientId
            }
        );

        
    }

    function onChangeHandler(e){
        //console.log(e.target.value)
        setSearchData([])
        setInputText(e.target.value)
    }

    async function onClickHandler(e){
        console.log("search btn clicked");
        try {
            const data = await queryClient.fetchQuery({
                queryFn : ()=>getUserByUsername({username : inputText,token : auth.token}),
                queryKey : ['getuserbyusername']
            })

            setSearchData(data);
            console.log("data at add frnd modal : ",data);
        } catch (error) {
            console.log("Error while fetching the data : ",error);
            throw error;
        }

    }

    return(
        <>
            <Dialog
                className={'h-52 '}
                open={open}
                onOpenChange={()=>setOpen(!open)}
            >
                <DialogContent>
                    <div>
                        Search friends, workspace
                    </div>

                    <div className="flex items-center justify-center">

                        <input 
                            type="text"
                            placeholder="@ Search by Username"
                            className="py-1 px-2 rounded-md border border-gray-300"
                            onChange={onChangeHandler}
                        />

                        <span 
                            onClick={onClickHandler}
                            className="mx-1 cursor-pointer"
                        >
                            <SearchIcon className="text-gray-600"/>
                        </span>
                        
                            
                    </div>

                    {
                        searchData.length>0 && 
                            searchData.map((data)=>{
                                return(
                                    <div
                                        key={data?._id}
                                        className="bg-gray-200 flex justify-between items-center border rounded-md border-gray-300 py-1 cursor-pointer"
                                    >   
                                        <div className="flex justify-center items-center mx-2">
                                            <img 
                                                className="h-8 w-8"
                                                src={data?.avatar} 
                                                alt="" 
                                            />
                                            <span className="font-semibold mx-2">{data?.username}</span>
                                        </div>
                                        <UserPlus 
                                            onClick={()=>handleFriendRequestSendClick(data?._id)}
                                            className="mx-2 hover:text-gray-600 transition-all"
                                        />
                                    </div>
                                )
                            })
                            
                    }
                    
                </DialogContent>
                
            </Dialog>
        </>
    )
}