import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
//import { PROJECTS } from '../mock-projects';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  projects: Project[] = [];
  displayProjects: Project[] = [];

  projectCount = this.projects.length;

  project: Project = {
    id: 1,
    projectName: "TPS Reports",
    projectManager: "Lumberg",
    overallStatus: "G",
    percentageComplete: 65,
    modifiedDate: "2017-12-16 22:59:13"
  };

 
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        this.displayProjects = projects;
        this.projectCount = this.projects.length;
        console.log('project count' + this.projects.length);
      });
  }
  
  filter(overallStatus:any) {
    this.displayProjects = this.projects.filter(projects => projects.overallStatus === overallStatus );
  };

  getCount(overallStatus:string) {
    return this.projects.filter(list => list.overallStatus === overallStatus).length;
  }

  showAll() {
    this.getProjects();
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

}
