import { educationAchivements } from "@/data/resume/education";
import { experienceAchivements } from "@/data/resume/experience";
import { languages } from "@/data/resume/language";
import Achievement from "@/modules/common/components/Achivement";
import Layout from "@/modules/common/layouts/layout";
import Percentages from "@/modules/resume/Percentages";

export default function ResumePage(){
    
    return(
        <Layout>
        <>
            <section className="mt-10">
                <article className="flex items-center gap-5 mb-10">
                    <div className="bg-gradient-to-br  from-neutral-800 to-neutral-900 rounded-xl p-3 relative flex items-center justify-center">
                        <span className="border-r  border-neutral-700 w-[1px] h-10 absolute  -bottom-10"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                    </div>
                    <h2 className="text-2xl text-white font-semibold">Education</h2>
                </article>
            
                {educationAchivements.length === 0 ? null : educationAchivements.map( ( education, i ) => (
                 <Achievement key={education.id} achievement={education} isLast={educationAchivements.length - 1 === i}/>
                ))}
  
            
        
            </section>

            <section className="mt-10">
                <article className="flex items-center gap-5">

                    <div className="bg-gradient-to-br  from-neutral-800 to-neutral-900 rounded-xl p-3 relative flex items-center justify-center">
                        <span className="border-r  border-neutral-700 w-[1px] h-8 absolute  -bottom-8"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl text-white font-semibold">Experience</h2>

                </article>
            {
                experienceAchivements.length === 0 ? null : experienceAchivements.map( (xp, index) => (
                    <Achievement key={xp.id} achievement={xp} isLast={experienceAchivements.length -1 === index } />
                ))
            }
            </section>

            <section className="mt-10">
            <h2 className="text-2xl text-white font-semibold">Languages</h2>

            <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl  px-8 py-8 gap-8   flex flex-col mt-5">
                    {
                        languages.length === 0 ? null : languages.map ( language => (
                            <Percentages key={language.id} property={language}/>
                        ))
                    }
            </article>
            {/* </section>
            <section className="mt-10">
            <h2 className="text-2xl text-white font-semibold">My Skills</h2>
            <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl px-8 py-8 gap-8  flex flex-col mt-5">
                    {
                        skills.length === 0 ? null : skills.map( (skill) => (
                            <Percentages key={skill.id} property={skill}/>
                        ))
                    }
            </article>*/}
            </section> 
        </>
        </Layout>
    )
}