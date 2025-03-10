
interface Props {
    children : React.ReactElement
}
export default function AboutPage({children} : Props){
    return (
        <main className="w-3/4 p-4 bg-neutral-900 my-20 rounded-lg ">
            {children}
        </main>
    )
}