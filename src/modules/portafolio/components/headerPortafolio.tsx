interface Props {
    changeType : (type : string) => void;
    type : string
}
export default function HeaderPortafolio({type, changeType} : Props){
    const typesProjects = ['All', 'FullStack', 'Java', "Decentralized"];
    return (
        <nav className="flex gap-5 p-3">
            { typesProjects.map(tp => (
                <button key={tp}  onClick={() => changeType(tp)}
                className={type !== tp ? `text-white p-2 font-semibold hover:text-yellow-300` : "text-yellow-300 p-2 font-semibold"}>{tp}</button>
            ))}
        </nav>
    )
}