import { Injectable } from '@angular/core';
import { Project, ProjectWrapper } from './project';
//import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//class ProjectWrapper { projects: Project[] = []; }

export class ProjectService {

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      //this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private projectsUrl = 'https://raw.githubusercontent.com/daynya/workshop.reactjs.2/master/public/db.json';
  

  getProjects(): Observable<Project[]> {

    return this.http.get<ProjectWrapper>(this.projectsUrl)
      .pipe(
          map(projectWrapper => projectWrapper.projects),
        catchError(this.handleError<Project[]>('getProjects', []))
      );
      
  }
  
  constructor(private http: HttpClient) { }
}
