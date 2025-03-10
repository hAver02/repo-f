'use client'
import Image from "next/image";
import { useState } from "react";
import { Project } from "../common/types/project";

interface Props {
  project: Project;
}

export default function BigProject({ project }: Props) {
  const [image, setImage] = useState<string>(project.image[0]);

  return (
    <div className="max-w-4xl mx-auto w-full p-4">
      <div className="flex flex-col gap-4">
        {/* Imagen Principal */}
        <div className="w-full">
          <Image
            src={image}
            alt={project.name}
            width={800}
            height={400}
            className="object-cover w-full h-auto rounded-lg max-h-[400px] md:max-h-[500px]"
          />
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2 justify-center">
          {project.image.map((img) => (
            <Image
              key={img}
              src={img}
              alt={project.name}
              width={80}
              height={80}
              onClick={() => setImage(img)}
              className={`h-14 w-14 md:h-16 md:w-16 rounded-xl object-cover cursor-pointer transition-all duration-300 ${
                img === image ? "border-2 border-yellow-300 scale-105" : ""
              }`}
            />
          ))}
        </div>

        {/* Botón con link a GitHub */}
        <div className="text-center mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
          >
            Ver en GitHub
          </a>
        </div>
      </div>

      {/* Tecnologías */}
      {project.technologies.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-semibold text-white text-center">
            Stack Used
          </h2>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          {project.technologies.map((tech, index) => (
            <div key={index} className="">

                {/* {React.cloneElement(tech.icon as React.ReactElement, { className: "w-8 h-8" })} */}
                <div className="w-10 h-10 flex items-center justify-center text-3xl">{tech.icon}</div>
            </div>
        ))}

          </div>
        </div>
      )}
    </div>
  );
}
