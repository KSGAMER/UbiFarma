import { Component, OnInit } from '@angular/core';

// LocalService Service
import { LocalService } from '../../../../services/local.service';
import { NgForm } from '@angular/forms';

// Local Class
import { Local } from '../../../../models/local';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  constructor(private localService: LocalService, private toastr: ToastrService) { }

  ngOnInit() {
    this.localService.getLocals();
    this.resetForm();
  }

  onSubmit(localForm: NgForm) {
    if(localForm.value.$key == null){
      this.localService.insertLocal(localForm.value);
      this.toastr.success('Se ha agregado una nueva Sucursal', '¡Sucursal agregada con Exito!');
    }
    else{
      this.localService.updateLocal(localForm.value);
      this.toastr.success('Se ha actualizado una Sucursal', '¡Sucursal actualizada con Exito!');
    }
    this.resetForm(localForm);
  }

  resetForm(localForm?: NgForm) {
    if(localForm != null) {
      localForm.reset();
      this.localService.selectedLocal = new Local();
    }
  }
}
