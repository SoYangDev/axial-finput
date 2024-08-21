import { computed, Injectable, signal } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FinancialNumberSuffix, FinancialSuffixMap } from "../interfaces/financial-number";

interface FinancialNumberState {
    finValue: string
}

@Injectable({
    providedIn: 'root'
})
export class FinputService {
    //state
    private state = signal<FinancialNumberState>({
        finValue: ''
    })

    // selectors
    financialNumber = computed(()=> this.state().finValue)

    convertedValue = computed(() => {
        const [num, suffix] = this.state().finValue.split(/(?=[a-zA-Z])/)
        return !num ? null :  Number(num) * FinancialSuffixMap[suffix as FinancialNumberSuffix];
    })
    
    // actions
    submit$ = new Subject<string>()

    // reducer
    constructor() {
        this.submit$.pipe(
            takeUntilDestroyed()
        ).subscribe(financialNumber => 
            this.state.update(()=> ({
                finValue: financialNumber
            }))
        )
    }

}