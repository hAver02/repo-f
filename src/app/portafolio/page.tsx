'use client'

import { projects } from "@/data/portafolio/projects";
import Layout from "@/modules/common/layouts/layout";
import { Project } from "@/modules/common/types/project";
import HeaderPortafolio from "@/modules/portafolio/components/headerPortafolio";
import ProjectPortafolio from "@/modules/portafolio/components/project";
import { useState } from "react";

export default function PortafolioPage(){
    const [typeProyect, setTypeProyect] = useState('All')
    let proyectsToShow : Project[] = [];
    if(typeProyect == 'All'){
      proyectsToShow = projects
    }else{

      proyectsToShow == projects.filter(pro => pro.category == typeProyect)
    }
    return(
        <Layout>
    
            <>
            <HeaderPortafolio type={typeProyect} changeType={setTypeProyect} />
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              {
                proyectsToShow.length === 0 ? null : proyectsToShow.map(project => (
                  <ProjectPortafolio key={project.id} project={project} />
                ))
              }
            </section>
            
            </>
        </Layout>
    )
}