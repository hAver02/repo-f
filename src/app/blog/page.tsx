import { blogs } from "@/data/blog/blogs";
import Blog from "@/modules/blog/component/blog";
import Layout from "@/modules/common/layouts/layout";
import Image from "next/image";

export default function BlogPage(){
    return(
        <Layout>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {blogs.map(bl => (
                    <Blog blog = {bl} key={bl.id}/>
                ))}
            </section>
        </Layout>
    )
}