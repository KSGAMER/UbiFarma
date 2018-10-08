import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Medicine } from '../medicines.model';
import { MedicineService } from '../../services/medicine.service';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {
  @Output() medicineWasSelected = new EventEmitter<Medicine>();
  medicines: Medicine[];
  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
    this.medicines = this.medicineService.getMedicines();
  }

}
