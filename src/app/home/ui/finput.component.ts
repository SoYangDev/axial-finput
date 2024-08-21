import { Component, input, output } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    standalone: true,
    selector: 'finput',
    template: `
        <form [formGroup]="formGroup()" (ngSubmit)="save.emit()">
            <label for="financialNumber">{{label()}}</label>
            <input
                [formControlName]="formControlName()"
                id="financialNumber"
                type="text"
            />
            <button type="submit" [disabled]="formGroup().invalid">Submit</button>
            @if(formGroup().invalid) {
                <p>Please enter a financial number with the format 1k, 1.5m or 1b</p>
            } 
        </form>
    `,
    imports: [
        ReactiveFormsModule
    ]
})
export default class FinputComponent{
    label = input.required<string>();
    formControlName = input.required<string>()
    formGroup=input.required<FormGroup>();
    save = output()
}