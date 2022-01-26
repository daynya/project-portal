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
      .subscribe(projects => this.projects = projects);
  }
  
  filter(overallStatus:any) {
    this.projects = this.projects.filter(projects => projects.overallStatus === overallStatus );
  };
  
  clearFilter(overallStatus:any) {
    this.projects.filter(overallStatus);
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

}
