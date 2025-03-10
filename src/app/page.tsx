
import Layout from "@/modules/common/layouts/layout";
import SoftSkill from "@/modules/softskill/softskill";
import { resumeParagraph } from "@/data/about-me/paragraph";
import { activities } from "@/data/about-me/activities";
import ActivityComponent from "@/modules/activity/component/Activity";
import { softSkills } from "@/data/about-me/softskills";
import TechCarousel from "@/modules/techStack/carrouselStack";

export default function Home() {
  return (
    <Layout>
      <>
        <section>
          <div className="flex flex-col gap-4 mt-4">
            {!resumeParagraph?.length ? null : 
              <p  className="text-white">
                {resumeParagraph}
              </p>
            }
          </div>
        </section>
        <section className="mt-8">
          <h2 className="font-4xl text-white font-semibold">What i am doing</h2>
          <div className="grid grid-cols-2 gap-3 mt-5">
              {activities.map((act, i) => (
                <ActivityComponent key={i} activity={act} />
              ))}
          
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-white font-semibold text-2xl">Soft skills</h2>
          <div className="grid grid-cols-2 gap-3 mt-10">
              {softSkills.map((sk, i) => (
                <SoftSkill key={i} icono={sk.icon} skillName={sk.name} description={sk.content}/>
              ))}
          </div>
        </section>
        <section className="mt-5">
          <section className="mt-5">
            <h2 className="text-white font-semibold text-2xl">Tech Stack</h2>
            <TechCarousel />
          </section>
        </section>
      </>
    </Layout>
  );
}
