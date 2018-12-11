import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Medicine } from 'src/app/models/medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  constructor(private medicineService: MedicineService, private toastr: ToastrService) { }

  ngOnInit() {
    // this.medicineService.getMedicines();
    this.resetForm();
  }

  onSubmit(medicineForm: NgForm) {
    if(medicineForm.value.$key == null) {
      this.medicineService.insertMedicine(medicineForm.value);
      this.toastr.success('Se ha agregado un nuevo Medicamento', '¡Medicamento agregado con Exito!')
    }else {
      this.medicineService.updateMedicine(medicineForm.value);
      this.toastr.success('Se ha actualizado un Medicamento', '¡Medicamento actualizado con Exito!');
    }
    this.resetForm(medicineForm);
  }

  resetForm(medicineForm?: NgForm) {
    if(medicineForm != null) {
      medicineForm.reset();
      this.medicineService.selectedMedicine = new Medicine();
    }
  }

}
