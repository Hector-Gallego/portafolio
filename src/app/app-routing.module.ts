import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'inicio', component: AboutComponent,  data: {animation: 'InicioPage'} },
  {path: 'habilidades', component: SkillsComponent, data: {animation: 'habilidadesPage'}},
  {path: 'proyectos', component: ProjectsComponent, data: {animation: 'proyectos'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'contatc'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
