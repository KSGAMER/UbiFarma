import { Component, OnInit } from '@angular/core';

// Servicio LocalService
import { LocalService } from '../../../../services/local.service';
import { ToastrService } from 'ngx-toastr';

// Clase Local
import { Local } from '../../../../models/local';
import { Subscription } from 'rxjs';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.css']
})
export class LocalListComponent implements OnInit {
  private subscription: Subscription;
  localList: Local[];
  constructor(private localService: LocalService, private toastr: ToastrService, private medicineService: MedicineService) { }

  ngOnInit() {
    this.subscription = this.localService.getLocals().snapshotChanges().subscribe(item => {
      this.localList = [];
      item.forEach(element => {
        let local = element.payload.toJSON();
        local["$key"] = element.key;
        this.localList.push(local as Local);
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSucursal(local: Local) {
    this.medicineService.sucursal = local.$key;
    this.medicineService.getMedicines();
  }

  onEdit(local: Local) {
    this.localService.selectedLocal = Object.assign({}, local);
  }

  onDelete($key: string) {
    if (confirm('¿Está seguro de Eliminar está Sucursal?')) {
      this.localService.deleteLocal($key);
      this.toastr.success('Se ha eliminado una Sucursal', '¡Sucursal eliminada con Exito!');
    }
  }
}
