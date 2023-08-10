import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as  AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'portafolio';

  
  ngOnInit() {
    AOS.init(); // Inicializa AOS en el evento OnInit
    window.addEventListener('load', AOS.refresh);
  }
}
