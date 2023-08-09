import { Category } from "./category";
import { RoleProject } from "./roleProject";
import { Technology } from "./technology";


export interface Project{
    id: number;
    name: string;
    date: Date;
    about: string;
    challenges: string;
    overview: string;
    imgUrls: string;
    urlRepoBackend: string;
    urlRepoFrontend: string;
    urlDemo: string;
    categories: Category[];
    roleProjects: RoleProject[];
    technologies: Technology[];
    imgUrlsList : string[];
}