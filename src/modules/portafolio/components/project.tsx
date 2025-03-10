'use client'
import { Project } from "@/modules/common/types/project";
import Image from "next/image";
import Link from "next/link";

interface Props {
    project : Project
}
export default function ProjectPortafolio({project} : Props){

    return (
        <article className="rounded-xl flex flex-col gap-3 group max-h-96 shadow-md shadow-neutral-600">
          <div className="relative overflow-hidden rounded-xl ">
            <Image
              width={500}
              height={500}
              src={project.image[0]}
              alt="project-image"
              className="object-cover h-40 rounded-xl group-hover:scale-125 duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="w-full h-full bg-opacity-0 group-hover:bg-opacity-60 bg-neutral-900 absolute top-0 left-0 flex justify-center items-center transition-all">
              <Link
                href={`/portafolio/${project.id}`}
                className="rounded-lg p-4 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 bg-neutral-700 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="text-white font-semibold">{project.name}</h2>
            <p className="text-neutral-400 capitalize">{project.category}</p>
          </div>
        </article>
    )
    
}