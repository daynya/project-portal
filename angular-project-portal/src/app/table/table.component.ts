import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute, ParamMap, RouterPreloader } from '@angular/router';
import { combineLatest } from 'rxjs';

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

  overallStatus: any;
 
/*   getProjects(): void {
    combineLatest(this.projectService.getProjects(), this.route.queryParams)
      .subscribe(([projects, routeParams]) => {
        this.projects = projects;
        this.displayProjects = projects;
        this.projectCount = this.projects.length;
        //this.filter(routeParams['overallStatus']);
        console.log(routeParams);
      });
  } */

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        this.displayProjects = projects;
        this.projectCount = this.projects.length;
      });
  }
  
  filter(overallStatus:any) {
    if (overallStatus === '') {
      this.getProjects();
    }
    this.displayProjects = this.projects.filter(projects => projects.overallStatus === overallStatus);
  };

  getCount(overallStatus:string) {
    return this.projects.filter(list => list.overallStatus === overallStatus).length;
  }

  showAll() {
    this.getProjects();
  }

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjects();
    this.route.params.subscribe(routeParams => {
      this.filter(routeParams['overallStatus']);
    });
  }

}

