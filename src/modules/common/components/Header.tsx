'use client'

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { projects } from "@/data/portafolio/projects"
interface Link {
    href : string,
    title : string
}
const links : Link[] = [
    {href : "/", title : 'About'},
    {href : "/resume", title : 'Resume'},
    {href : "/portafolio", title : 'Portafolio'},
    // {href : "/blog", title : 'Blog'},
    {href : "/contact", title : 'Contact'},

]

function useLayout(pathname : string){
    if(pathname == '/') return 'About Me';
    if(pathname == '/resume') return "Resume";
    if(pathname == '/contact') return 'Contact';
    if(pathname == '/portafolio') return "Portafolio"
    if(pathname.includes('/portafolio')) return "Portafolio"
    return "Blog";
}

export default function Header(){
    const pathname = usePathname()
    const {idproyecto} = useParams()
    const linkName = useLayout(pathname);

    const name = idproyecto ? projects.find(pr => pr.id ==idproyecto)?.name : linkName 
 
    return (
        <header className="flex justify-between">
            <h1 className="text-yellow-300 text-3xl mb-3  ">{name}</h1>
            <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-700 ">
                <ul className="flex gap-5 h-full items-center px-3">
                    {
                        links.map((li : Link) => (
                            <Link key={li.title}className={`${pathname == li.href ? 'text-yellow-300' : ''} 
                            text-neutral-300 font-semibold text-lg hover:text-yellow-300`}
                            href={li.href} >{li.title}</Link>
                        ))
                    }


                
                </ul>
            </nav>
    </header>
    )
}