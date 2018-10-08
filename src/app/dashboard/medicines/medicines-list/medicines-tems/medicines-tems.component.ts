import { Component, OnInit, Input } from '@angular/core';
import { Medicine } from '../../medicines.model';
import { MedicineService } from '../../../services/medicine.service';

@Component({
  selector: 'app-medicines-tems',
  templateUrl: './medicines-tems.component.html',
  styleUrls: ['./medicines-tems.component.css']
})
export class MedicinesTemsComponent implements OnInit {
  @Input() medicine: Medicine;
  constructor(private medicineService: MedicineService) { }

  ngOnInit() {
  }

  onSelected() {
    this.medicineService.medicineSelected.emit(this.medicine);
  }

}
