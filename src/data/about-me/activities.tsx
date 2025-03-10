import { Activity } from "@/modules/common/types/activiy";
import { CodeBracketIcon, ServerIcon, GlobeAltIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";

export const activities: Activity[] = [
  {
    id: "1",
    name: "Fullstack Developer",
    content: "Building complete web applications using MERN stack.",
    icon: <CodeBracketIcon className="w-6 h-6 text-yellow-200" />,
    active: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Backend Java Developer",
    content: "Developing RESTful APIs and microservices using Java and Spring Boot.",
    icon: <ServerIcon className="w-6 h-6 text-yellow-200" />,
    active: true,
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Web Developer",
    content: "Creating responsive and dynamic websites with modern technologies.",
    icon: <GlobeAltIcon className="w-6 h-6 text-yellow-200" />,
    active: true,
    createdAt: new Date(),
  },
  {
    id: "4",
    name: "Blockchain Developer",
    content: "Developing smart contracts and decentralized applications with solidity.",
    icon: <CubeTransparentIcon className="w-6 h-6 text-yellow-200" />,
    active: true,
    createdAt: new Date(),
  },
];