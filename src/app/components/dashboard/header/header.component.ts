import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthorizationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
  }

  onMedicamentos() {
    this.router.navigate(['medicines'], {relativeTo: this.route});
  }

  onPerfil() {
    this.router.navigate(['profile'], {relativeTo: this.route});
  }

  onEstadisticas() {
    this.router.navigate(['stadistcis'], {relativeTo: this.route});
  }

  onChat() {
    this.router.navigate(['chat'], {relativeTo: this.route});
  }
}
