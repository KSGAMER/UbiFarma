import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Medicine } from '../models/medicine';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  medicineList: AngularFireList<any>;
  selectedMedicine: Medicine = new Medicine();
  public sucursal: string;
  public boleano: boolean;
  
  constructor(private firebase: AngularFireDatabase, private localService: LocalService) { }

  getMedicines() {
    console.log(this.sucursal);
    this.boleano = true;
    return this.medicineList = this.firebase.list('Farmacias/'+this.localService.id+'/Sucursales/'+this.sucursal+'/Medicamentos');
  }

  getStatus() {
    return this.boleano;
  }

  insertMedicine(medicine: Medicine) {
    this.medicineList.push({
      nombre: medicine.nombre,
      pastillero: medicine.pastillero,
      presentacion: medicine.presentacion,
      stock: medicine.stock,
      precio: medicine.precio
    });
  }

  updateMedicine(medicine: Medicine) {
    this.medicineList.update( medicine.$key, {
      nombre: medicine.nombre,
      pastillero: medicine.pastillero,
      presentacion: medicine.presentacion,
      stock: medicine.stock,
      precio: medicine.precio
    });
  }

  deleteMedicine($key: string) {
    this.medicineList.remove($key);
  }
}
