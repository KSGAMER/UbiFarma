import { Component, OnInit, Input } from '@angular/core';
import { Medicine } from '../medicines.model';

@Component({
  selector: 'app-medicines-detail',
  templateUrl: './medicines-detail.component.html',
  styleUrls: ['./medicines-detail.component.css']
})
export class MedicinesDetailComponent implements OnInit {
  @Input() medicine: Medicine;
  constructor() { }

  ngOnInit() {
  }

}
