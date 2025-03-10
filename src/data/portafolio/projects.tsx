import { Project } from "@/modules/common/types/project";
import { FaNodeJs, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiPostgresql, SiNextdotjs, SiTailwindcss, SiSolidity, SiPrisma, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";

export const projects: Project[] = [
  {
    id: "1",
    name: "Comaf E-SHOP",
    category: "FullStack",
    link: "https://github.com/hAver02/next-comafshop",
    image: ["/portafolio/comafshop/comafshop.png","/portafolio/comafshop/comafshop2.png","/portafolio/comafshop/comafshop3.png","/portafolio/comafshop/comafshop4.png"],
    createdAt: new Date(),
    technologies: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
  },
  {
    id: "5",
    name: "Voting dapp",
    category: "Decentralized",
    link: "https://github.com/hAver02/hAverVotingDapp",
    image: ["/portafolio/blockchain.jpg"],
    createdAt: new Date(),
    technologies: [
      { icon: <SiSolidity />, name: "Solidity" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Hardhat" },
      { icon: <FaCss3Alt />, name: "CSS" },
    ],
  },
  {
    id: "2",
    name: "Legaline",
    category: "FullStack",
    link: "https://github.com/hAver02/back-legaline",
    image: ["/portafolio/legaline/legaline.jpeg","/portafolio/legaline/legaline2.jpeg","/portafolio/legaline/legaline3.jpeg"],
    createdAt: new Date(),
    technologies: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaCss3Alt />, name: "CSS" },
    ],
  },
  {
    id: "3",
    name: "Phones Eccomerce",
    category: "FullStack",
    link: "https://github.com/hAver02/celulares-eccomerce",
    image: ["/portafolio/celulares.png"],
    createdAt: new Date(),
    technologies: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaReact />, name: "React" },
    ],
  },
  {
    id: "4",
    name: "Real Estate",
    category: "Decentralized",
    link: "https://github.com/hAver02/hAverRealEstate-dApp",
    image: ["/portafolio/blockchain.jpg"],
    createdAt: new Date(),
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiSolidity />, name: "Solidity" },
      { icon: <FaNodeJs />, name: "Hardhat" },
    ],
  },
];
