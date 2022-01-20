import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  projects = PROJECTS;
  
  project: Project = {
    id: 1,
    projectName: "TPS Reports",
    projectManager: "Lumberg",
    overallStatus: "G",
    percentageComplete: 65,
    modifiedDate: "2017-12-16 22:59:13"
};

  constructor() { }

  ngOnInit(): void {
  }

}
