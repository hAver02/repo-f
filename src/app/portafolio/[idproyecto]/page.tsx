
import { projects } from "@/data/portafolio/projects";
import Layout from "@/modules/common/layouts/layout";
import BigProject from "@/modules/portafolio/project-big";

interface Props {
    params : {
        idproyecto : string
     }
}

export default async function ProyectoPage({params } : Props){
    
    const { idproyecto } = params;
    
    const project = projects.find(pr => pr.id == idproyecto);
    if(!project) return <div> Sin projecto </div>
    
    
    return (
        <Layout>
                <div>
                    <BigProject project={project}/>       
                </div>
        </Layout>
    )
}