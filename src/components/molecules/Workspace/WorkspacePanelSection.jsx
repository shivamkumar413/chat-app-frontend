import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronRightIcon, PlusIcon } from "lucide-react";
import { useState } from "react"

export const WorkspacePanelSection = ({children,label,onIconClick})=>{

    const [open,setOpen] = useState(false);

    return(
        <div className="flex flex-col">
            <div className="flex items-center px-4 group">
                <div
                    className="flex items-center"
                    onClick={()=>setOpen(!open)}
                >

                
                <Button
                    variant="transparent"
                    className='p-0.5 text-sm size-6 text-[#f9edffcc]'

                >
                    {open ? <ChevronDownIcon className="size-3" /> : <ChevronRightIcon className="size-3" />}
                </Button>

                <Button
                    variant="transparent"
                    size="sm"
                    className={'group p-0.5 text-sm text-[#f9edffcc] h-7.5 jusitfy-start items-center overflow-hidden'}
                >
                    <span>{label}</span>
                </Button>
                </div>


                <Button
                    variant="primary"
                    size="sm"
                    onClick={onIconClick}
                    className='text-[#f9edffcc] transition ml-auto text-sm p-0.5 size-6 hover:bg-[#5865F2]'
                >
                    <PlusIcon className="size-4"/>
                </Button>
            </div>
            {open && children}
        </div>
    )
}