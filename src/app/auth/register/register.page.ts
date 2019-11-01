import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild  } from '@angular/core'; 
import { Router } from  "@angular/router";
import {  IonSlides  } from "@ionic/angular";
//import { AuthService } from '../auth.service';
//import { MDBBootstrapModule } from 'angular-bootstrap-md'
    
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    //private  authService:  AuthService, 
    private  router:  Router) { }

  ngOnInit() {
  }

  register(form) {
   // this.authService.register(form.value).subscribe((res) => {
    //  this.router.navigateByUrl('home');
    //});
  }

  goToSlideTwo() {
    this.slides.slideTo(1);
  }

  goToSlideOne() {
    this.slides.slideTo(0);
  }

}