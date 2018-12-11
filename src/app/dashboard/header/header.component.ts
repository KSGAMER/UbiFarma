import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private route: ActivatedRoute, private router: Router) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  ngOnInit() {
  }

  onMedicamentos() {
    this.router.navigate(['medicines'], {relativeTo: this.route});
  }

  onEspecialista() {
    this.router.navigate(['specialist'], {relativeTo: this.route});
  }

  onEstadisticas() {
    this.router.navigate(['stadistics'], {relativeTo: this.route});
  }

  onChat() {
    this.router.navigate(['chat'], {relativeTo: this.route});
  }

  onPerfil() {
    this.router.navigate(['profile'], {relativeTo: this.route});
  }
}
