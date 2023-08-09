import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import Typed from 'typed.js';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  isTextVisible = false;
  showText() {
    this.isTextVisible = true;
  }

  hideText() {
    this.isTextVisible = false;
  }

}
