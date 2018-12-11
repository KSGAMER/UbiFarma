import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Local } from "../models/local";

@Injectable()
export class LocalService {
    localList: AngularFireList<any>;
    selectedLocal: Local = new Local();
    public id: string;

    constructor(private firebase: AngularFireDatabase) {}

    getLocals() {
        return this.localList = this.firebase.list('Farmacias/'+this.id+'/Sucursales');
    }

    insertLocal(local: Local) {
        this.localList.push({
            nombre: local.nombre,
            direccion: local.direccion,
            ubicacion: local.ubicacion
        });
    }

    updateLocal(local: Local) {
        this.localList.update(local.$key, {
            nombre: local.nombre,
            direccion: local.direccion,
            ubicacion: local.ubicacion
        });
    }

    deleteLocal($key: string) {
        this.localList.remove($key);
    }
}