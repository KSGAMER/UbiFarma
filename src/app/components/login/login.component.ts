import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(public authService: AuthorizationService) { }
  
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password =  '';
  }
}
