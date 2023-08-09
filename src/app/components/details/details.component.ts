import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  loading : boolean = true;

  project: Project | undefined;

  ngOnInit() {
    this.getProyect();

  }
  getProyect(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.projectService.getProject(id).subscribe((project) => {



      project.imgUrlsList = [];

      const urls = project.imgUrls.split(',');
      console.log(urls);

      urls.forEach((url) => {
        project.imgUrlsList.push(url.trim());
      });


      this.project = project;
      console.log(project.imgUrlsList);
      this.loading = false;


    });
  }

}
