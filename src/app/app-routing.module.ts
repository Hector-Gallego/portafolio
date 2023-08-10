import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error/error.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path: '', redirectTo: '/sobremi', pathMatch: 'full' },
  {path: 'sobremi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'contactame', component: ContactComponent},
  {path: 'detalles/:id', component: DetailsComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/sobremi' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: "ignore",
      anchorScrolling:'enabled',
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
