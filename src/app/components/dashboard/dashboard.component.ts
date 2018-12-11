import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authorization: AuthorizationService, private route: Router) { }

  ngOnInit() {
    if(this.authorization.logStatus() == false) {
      this.route.navigate(['load']);
    }
  }

}
