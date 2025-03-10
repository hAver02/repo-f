import { SoftSkill } from "@/modules/common/types/softSkill";
import { UsersIcon, LightBulbIcon, AcademicCapIcon } from "@heroicons/react/24/solid";


export const softSkills: SoftSkill[] = [
  {
    id: "1",
    name: "Teamwork",
    content: "Collaborating effectively with others to achieve common goals.",
    icon: <UsersIcon className="w-6 h-6 text-yellow-200"/>, // React component
    active: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Proactive",
    content: "Taking initiative and anticipating challenges before they arise.",
    icon : <LightBulbIcon className="w-6 h-6 text-yellow-200"/>,
    createdAt: new Date(),
    active : true
  },
  {
    id: "3",
    name: "Continuous Learning",
    content: "Always improving and staying up-to-date with new technologies.",
    icon : <AcademicCapIcon className="w-6 h-6 text-yellow-200"/>,
    active: true,
    createdAt: new Date(),
  },
];