import { Pharmacy } from "../shared/pharmacy";

export class PharmacyService {
    private farmacia: Pharmacy[] = [
        new Pharmacy('1', 'Sucursal 1', 'Avenida Palmas', '90.0000, -98.6538'),
        new Pharmacy('2', 'Sucursal 2', 'Calle Pereira', '76.8653, -98.8755')
    ]

    getPharmacys() {
        return this.farmacia.slice();
    }
}