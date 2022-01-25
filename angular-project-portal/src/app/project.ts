export interface Project {
    id: number;
    projectName: string;
    projectManager: string;
    overallStatus: string;
    percentageComplete: number;
    modifiedDate: string;
}

export interface ProjectWrapper {
    projects: Project[];
}