import Image from "next/image";
import React, { ReactNode } from "react";
import Aside from "../components/aside.component";
import Link from "next/link";
import Header from "../components/Header";


interface Props { 
    children : React.ReactElement
}

export default function Layout({children} : Props){
    return(
        <main className="bg-neutral-950 px-48 h-screen flex gap-5">
            <Aside />
            <div className="flex-1 py-14 overflow-auto scrollbar-hide">
                <section className="flex  flex-col  px-8 pt-10 pb-12 bg-neutral-900  rounded-2xl border border-neutral-800 relative">
                    <Header />
                    {children}
                </section>
            </div>
        </main> 
    )
}