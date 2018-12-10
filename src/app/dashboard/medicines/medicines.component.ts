import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { Subscription } from 'rxjs';
import { Medicine } from '../shared/medicine';
import { PharmacyService } from '../services/pharmacy.service';
import { Pharmacy } from '../shared/pharmacy';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
  providers: [MedicineService, PharmacyService]
})
export class MedicinesComponent implements OnInit {
  private subscription: Subscription;
  medicines: Medicine[];
  pharmacys: Pharmacy[];
  constructor(private medicineService: MedicineService, private pharmacyService: PharmacyService) { }

  ngOnInit() {
    this.pharmacys = this.pharmacyService.getPharmacys();
    this.medicines = this.medicineService.getMedicines();
    this.subscription = this.medicineService.medicineUpdate.subscribe((medicines: Medicine[]) => {
      this.medicines = medicines;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.medicineService.startedEditing.next(index);
  }
}
