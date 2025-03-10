import { Activity } from "@/modules/common/types/activiy"

interface Props {
    activity : Activity
}
export default function ActivityComponent({activity} : Props){
    return(
        <div className=" flex gap-2 bg-gradient-to-br from-neutral-800 to-[#222222] px-4 py-8 rounded-xl shadow-lg " >
            <div className="px-2">
                {activity.icon}
            </div>
            <div className="flex flex-col text-white gap-2">
                <h3 className="font-semibold text-2xl">{activity.name}</h3>
                <p className="text-sm">{activity.content}</p>
            </div>
        </div>
    )
}