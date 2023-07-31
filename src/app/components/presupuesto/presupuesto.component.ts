import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
    selector: 'app-presupuesto',
    templateUrl: './presupuesto.component.html',
    styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit{
    cantidad: number;
    cantidadIncorrecta: boolean;

    // Inyección del servicio por dependencias
    constructor(private _presupuestoService: PresupuestoService, 
        private router: Router) {
        this.cantidad = 0;
        this.cantidadIncorrecta = false;
    }

    agregar(): void {
        this.cantidadIncorrecta = (this.cantidad > 0) ? false : true;

        if (!this.cantidadIncorrecta) {
            this._presupuestoService.presupuesto = this.cantidad;
            this._presupuestoService.restante = this.cantidad;
            this.router.navigate(['/gastos']);
        }
    }

    ngOnInit(): void { }
}
