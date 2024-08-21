import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { FinancialNumberSuffix } from "../../shared/interfaces/financial-number";

const finputSuffixes: FinancialNumberSuffix[] = ['k', 'm', 'b']

const suffixPattern = finputSuffixes.join('')

const regex = new RegExp(`^(\\d*\\.?\\d+)([${suffixPattern}])$`);

export const finputValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if(value){
        const match = value.match(regex)
        return match ? null : {invalidFinput: value}
    } else {
        return null
    }
}