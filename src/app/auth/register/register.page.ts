import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { Router } from  "@angular/router";
//import { AuthService } from '../auth.service';
//import { MDBBootstrapModule } from 'angular-bootstrap-md'
    
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

}