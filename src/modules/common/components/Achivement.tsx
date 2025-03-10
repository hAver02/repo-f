'use client'

import { useEffect, useRef, useState } from "react";
import type { Achievement } from "../types/achivement";

interface Props {
    achievement: Achievement;
    isLast?: boolean;
  }

export default function Achievement({isLast, achievement} :Props){
    const achievementProperties = useRef<HTMLDivElement>(null);
    const [spanHeight, setSpanHeight] = useState(0);

    const paragraphs = achievement.content.split("\n");
    
    useEffect(() => {
      if (achievementProperties.current) {
        const currentHeight = achievementProperties.current.clientHeight;
        setSpanHeight(currentHeight);
      }
    }, []);
    // console.log("paragraphs", paragraphs);
    // console.log(achievementProperties.current);
     
    return(
        <article className="flex gap-5 mt-5" ref={achievementProperties}>

            <div className=" flex items-center justify-center h-1 w-1 bg-yellow-200 p-1 rounded-full relative ml-5">
                <span
                style={{
                    height: `${spanHeight + 10}px`,
                    bottom: `-${spanHeight + 10}px`,
                }}
                className={`${
                    isLast && "hidden"
                } border-r  border-neutral-700 w-[1px]  absolute  -bottom-10`}
                ></span>
            </div>

            <div className="flex flex-col gap-1">
                <h2 className="text-white font-semibold">{achievement.name}</h2>
                <span className="text-yellow-200">
                    {achievement.start} - {achievement.end}
                </span>
                {paragraphs.map((paragraph : string, index : number) => (
                    <p key={index} className="text-white">{paragraph}</p>
                ))}
            </div>
        </article>
    )
}