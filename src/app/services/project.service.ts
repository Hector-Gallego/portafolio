import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = 'https://portafolio-backend-production-f7b8.up.railway.app/api/projects';
 

  constructor(private http: HttpClient) { }

  getProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(this.url);
  }

  getProject(id:number) : Observable<Project>{
    return this.http.get<Project>(`${this.url}/${id}`);

  }
  
}

