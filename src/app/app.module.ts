import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { NgParticlesModule } from "ng-particles";
import { ParticlesComponent } from './components/particles/particles.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './components/details/details.component';
import { SniperComponent } from './components/shared/sniper/sniper.component';
import { ErrorComponent } from './components/error/error/error.component';
import { GlobalErrorHandler } from './components/error/error/global.error.hanlder';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ParticlesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    DetailsComponent,
    SniperComponent,
    ErrorComponent,
    GalleryComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxTypedJsModule
    
    
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
