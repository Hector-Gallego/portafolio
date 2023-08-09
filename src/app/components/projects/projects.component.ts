import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private projectService: ProjectService, private router: Router) { }

  projects: Project[] = [];
  loading: boolean = true;
  imgUrls: String[] = [];


  ngOnInit() {
    this.getProjects();

  }

  getProjects() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;

      this.projects.forEach((project) => {

        project.imgUrlsList = [];

        const urls = project.imgUrls.split(',');
        console.log(urls);

        urls.forEach((url) => {
          project.imgUrlsList.push(url.trim());
        });

      });

      this.loading = false;
      console.log(this.projects);

    });
  }

  goToRouteProjectDetails(id:number){
    this.router.navigate([`/detalles/${id}`])
  }

}


