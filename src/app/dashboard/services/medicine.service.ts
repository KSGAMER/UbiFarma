import { Subject } from 'rxjs';
import { Medicine } from '../shared/medicine';

export class MedicineService {
    medicineUpdate = new Subject<Medicine[]>();
    startedEditing = new Subject<number>();

    private medicines: Medicine[] = [
        new Medicine(1, 'paracetamol', 'Tabletas', 14),
        new Medicine(2, 'ambroxol', 'Liquido', 7),
        new Medicine(3, 'aspirina', 'Pastillas', 20),
        new Medicine(4, 'diclofenaco', 'Pastillas', 2),
        new Medicine(5, 'ampicilina', 'Tabletas', 26),
        new Medicine(6, 'metformina', 'Tabletas', 35),
        new Medicine(7, 'XL3', 'Capsulas', 87),
        new Medicine(8, 'aspirina', 'Pastillas', 12)
    ];

    getMedicines() {
        return this.medicines.slice();
    }

    getMedicine(index: number) {
        return this.medicines[index];
    }

    updateMedicine(index: number, medicine: Medicine) {
        this.medicines[index] = medicine;
        this.medicineUpdate.next(this.medicines.slice());
    }

    addMedicine(medicine: Medicine) {
        this.medicines.push(medicine);
        this.medicineUpdate.next(this.medicines.slice());
    }

    addMedicines(auxMedicines: Medicine[]) {
        for(const i of auxMedicines) {
            if(this.medicines.find(variable => variable.nombre == i.nombre)) {
                this.medicines.find(variable => variable.nombre == i.nombre).stock = this.medicines.find(variable => variable.nombre == i.nombre).stock + i.stock;
            }else{
                this.medicines.push(i);
            }
        }
        this.medicineUpdate.next(this.medicines.slice());
    }

    deleteMedicine(index: number) {
        this.medicines.splice(index, 1);
        this.medicineUpdate.next(this.medicines.slice());
    }
}