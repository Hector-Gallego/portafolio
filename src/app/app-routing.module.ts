import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', redirectTo: '/sobremi', pathMatch: 'full' },
  {path: 'sobremi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'contactame', component: ContactComponent},
  {path: 'detalles', component: DetailsComponent},
  {path: '**', redirectTo: '/sobremi' }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
