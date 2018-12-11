import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router, private authorizarion: AuthorizationService) { }

  ngOnInit() {
    if(this.authorizarion.logStatus() == true){
      this.delay(); 
    }else {
      this.router.navigate(['login']);
    }
  }

  private async delay() {
    await this.sleep(5000);
    this.router.navigate(['dashboard']);
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}