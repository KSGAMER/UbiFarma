import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  private subscription: Subscription;
  medicineList: Medicine[];

  constructor(private medicineService: MedicineService, private toastr: ToastrService) { }

  ngOnInit() {
    if(this.medicineService.getStatus() == true) {
      this.subscription = this.medicineService.getMedicines().snapshotChanges().subscribe(item => {
        console.log(this.medicineService.getMedicines());
        this.medicineList = [];
        item.forEach(element => {
          let medicine = element.payload.toJSON();
          console.log(medicine);
          medicine["$key"] = element.key;
          this.medicineList.push(medicine as Medicine);
        });
      });
    }
  }

  onEdit(medicine: Medicine) {
    this.medicineService.selectedMedicine = Object.assign({}, medicine);
  }

  onDelete($key: string) {
    if(confirm('¿Estás seguro de Eliminar este Medicamento?')) {
      this.medicineService.deleteMedicine($key);
      this.toastr.success('Se ha eliminado un Medicamento', '¡Medicamento eliminado con Exito!');
    }
  }

}
