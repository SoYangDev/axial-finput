import { Component, inject } from "@angular/core";
import { FinputService } from "../shared/data-access/finput.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector: 'converted-finvalue',
    template: `
        <a routerLink="/home">Back</a>
        <h1>{{finputSvc.convertedValue() | number}}</h1>
    `,
    imports: [CommonModule, RouterLink]
})
export default class ConvertedFinvalueComponent {
    finputSvc = inject(FinputService)
}