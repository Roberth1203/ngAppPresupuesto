import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
    selector: 'app-gastos',
    templateUrl: './gastos.component.html',
    styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
    constructor(private _presupuestoService: PresupuestoService) {
        console.log('Presupuesto actual: $', _presupuestoService.presupuesto);
    }
}
