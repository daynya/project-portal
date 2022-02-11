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
 
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        this.displayProjects = projects;
        this.projectCount = this.projects.length;
        this.overallStatus = 'all';
      });
  }
  
  filterProjects(overallStatus:any) {
    if (overallStatus === 'all') {
      this.displayProjects = this.projects;

    } else if (overallStatus === 'R' || overallStatus === 'Y' || overallStatus === 'G') {
      this.displayProjects = this.projects.filter(projects => projects.overallStatus === overallStatus);
    }
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
      this.filterProjects(routeParams['overallStatus']);
    });
  }

}

