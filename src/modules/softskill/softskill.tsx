import React from "react"

interface Props {
    icono : React.ReactElement
    skillName : string,
    description : string   
}

export default function SoftSkill({icono, skillName, description} : Props){
    return (
        <div className="py-5 px-8 shadow-lg  rounded-lg bg-neutral-800 flex justify-between ">
            <div className="flex flex-col  ">
                <div className="flex gap-5">
                    <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 p-5 rounded-xl flex -mt-10">
                        {icono}
                    </div>
                    <h3 className="text-lg text-white font-semibold">{skillName}</h3>
                </div>
                <p className="text-neutral-300 mt-2  ">{description}</p>
            </div>
      </div>
    )
}