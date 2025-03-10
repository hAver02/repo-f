"use client";

import { techStack } from "@/data/about-me/techStack";
import { useState, useEffect } from "react";

const VISIBLE_ITEMS = 5;

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 2000); // Cambiar cada 2 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${(currentIndex * 100) / 5}%)` }}
      >
        {techStack.map((tech, index) => (
          <div key={index} className="flex-shrink-0 w-1/5 p-2">
            <div className=" justify-center items-center w-28 h-28 text-white flex flex-col gap-2"  >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};