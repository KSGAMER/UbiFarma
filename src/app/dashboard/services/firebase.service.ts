import { Injectable } from '@angular/core'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Medicine } from '../models/medicine';

@Injectable()
export class FirebaseService {
    productList: AngularFireList<any>;
    selectedProduct: Medicine = new Medicine();

    constructor(private firebase: AngularFireDatabase) {
    }    

    getProducts() {
        return this.productList = this.firebase.list('medicines');
    }

    insertProduct(product: Medicine) {
        this.productList.push({
            nombre: product.nombre,
            presentacion: product.presentacion,
            precio: product.precio,
            pastillero: product.pastillero
        });
    }

    updateProduct(product: Medicine) {
        this.productList.update(product.skey, {
            nombre: product.nombre,
            presentacion: product.presentacion,
            precio: product.precio,
            pastillero: product.pastillero
        });
    }

    deleteProduct(skey: string) {
        this.productList.remove(skey);
    }
}