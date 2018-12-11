import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MedicineService } from '../../services/medicine.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Medicine } from '../../shared/medicine';

//Servicio
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {
  private subcription: Subscription;
  edithMode = false;
  editedItem: Medicine;
  indexEditionItem: number;
  @ViewChild('f') form: NgForm;
  // constructor( private productService: FirebaseService) { }
  constructor(private medicineService: MedicineService) {}
  ngOnInit() {
    this.subcription = this.medicineService.startedEditing.subscribe((index: number) => {
      this.indexEditionItem = index;
      this.editedItem = this.medicineService.getMedicine(index);
      this.edithMode = true;
      this.form.setValue({
        nombre: this.editedItem.nombre,
        presentacion: this.editedItem.presentacion,
        stock: this.editedItem.stock
      });
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const newMedicine = new Medicine(form.value.SKU, form.value.nombre, form.value.presentacion, form.value.stock);
    if(this.edithMode) {
      this.medicineService.updateMedicine(this.indexEditionItem, newMedicine);
    }else{
      this.medicineService.addMedicine(newMedicine);
    }
    this.onClear();
  }

  onDelete() {
    this.medicineService.deleteMedicine(this.indexEditionItem);
    this.onClear();
  }

  onClear() {
    this.form.reset();
    this.edithMode = false;
  }
}
