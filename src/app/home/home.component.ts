import { Component, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import FinputComponent from "./ui/finput.component";
import { FinputService } from "../shared/data-access/finput.service";
import { finputValidator } from "./ui/finput-validator";
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector:'home',
    template: `
        <h1>Axial Take Home</h1>
        <finput 
            label="Financial Number"
            [formGroup]="finputForm"
            formControlName="value"
            (save)="finputSvc.submit$.next(finputForm.getRawValue().value); finputForm.reset()"
            />
            @if(!!finputSvc.convertedValue() && !finputForm.getRawValue().value ) {
                <a routerLink="/converted-number" >View Converted Financial Number</a>
            }
    `,
    imports: [
        FinputComponent,
        RouterLink,
    ]
})
export default class FinInputPageComponent {
    finputSvc = inject(FinputService)
    
    fb = inject(FormBuilder)
    finputForm = this.fb.nonNullable.group({
        value: ['',  [Validators.required, finputValidator]]
    })

}