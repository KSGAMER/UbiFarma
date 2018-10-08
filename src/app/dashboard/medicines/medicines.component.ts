import { Component, OnInit } from '@angular/core';
import { Medicine } from './medicines.model';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
  providers: [MedicineService]
})
export class MedicinesComponent implements OnInit {
  medicineSelected: Medicine;
  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
    this.medicineService.medicineSelected.subscribe(
      (medicine: Medicine) => {
        this.medicineSelected = medicine;
      }
    );
  }

}
