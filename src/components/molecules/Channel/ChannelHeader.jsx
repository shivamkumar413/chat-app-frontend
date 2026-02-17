import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"

export const ChannelHeader = ({name})=>{
    console.log("Name at channel header : ",name)
    return(
        <div className="w-full ">
            <Dialog>
                <DialogTrigger>
                     <Button
                        variant="ghost"
                        className="text-lg font-semibold px-2 overflow-hidden w-auto flex border-b"
                    >
                        <span># {name} </span>
                        <ChevronDown className='size-3 ml-2' />
                    </Button>

                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            # {name}
                        </DialogTitle>
                    </DialogHeader>

                    <div
                        className='px-4 pb-4 flex flex-col gap-y-2'
                    >   
                        <div
                            className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-100'
                        >
                            <div className='flex items-center justify-between'>
                                <p className='text-sm font-semibold'>
                                    Channel name
                                </p>
                                <p className='text-sm font-semibold'>
                                    Edit 
                                </p>
                            </div>
                            <p className='text-sm'>
                                {name}
                            </p>

                        </div>


                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}