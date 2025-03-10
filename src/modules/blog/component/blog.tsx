import type { Blog } from "@/modules/common/types/blog";
import Image from "next/image";
interface Props {
    blog : Blog
}
export default function Blog({blog} : Props){
    return(
                        <article className="rounded-xl flex flex-col gap-2 group bg-neutral-800 hover:cursor-pointer">
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                height={500}
                                width={500}
                                src="data:image/jpeg;base64,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"
                                alt="articulo-image"
                                className="object-cover rounded-xl group-hover:scale-110 w-full max-h-60 transition-transform "
                                />
                            </div>
                            <div className="flex flex-col gap-3 px-4 py-5">
                                <p className="text-gray-500 ">{blog.date.toDateString()}</p>
                                <h3 className="text-2xl text-white font-bold">{blog.titulo}</h3>
                                <p className=" text-white">{blog.resumen}</p>
                            </div>
                        </article>
    )
}