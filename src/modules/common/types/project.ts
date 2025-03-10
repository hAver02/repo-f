export interface Project {
    id:        string;
    name:      string;
    category:  string;
    link:      string;
    image:     string[];
    createdAt: Date;
    technologies : {icon : React.ReactElement, name : string}[]
}