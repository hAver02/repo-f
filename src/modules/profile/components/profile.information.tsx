import Image from "next/image";
import { ReactNode } from "react";

interface Props {
    image : ReactNode, 
    nombre : string,
    info : string
}

export default function ProfileInformation({image, nombre, info} : Props){
    return (
            <div className="flex gap-2 w-full">
                <div className="bg-gradient-to-br  from-neutral-800 to-[#1a1a1a] rounded-lg p-2 flex items-center ">
                    {image}
                </div>
                <div className="text-white"> 
                    <h1 className="text-md text-neutral-500 uppercase">{nombre}</h1>
                    <p className="text-sm">{info}</p>
                </div>

            </div>
    )
}