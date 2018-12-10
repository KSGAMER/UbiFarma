import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PharmacyService } from '../dashboard/services/pharmacy.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private subscription: Subscription;
  @ViewChild('f') form: NgForm;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  onSign(form: NgForm) {
    if(form.value.email === "ahorro@gmail.com" && form.value.password === "12345"){
      this.router.navigate(['dashboard']);
    }
  }

}
