import { AbstractControl, FormControl } from '@angular/forms';
import { finputValidator } from './finput-validator'; // Update this path according to your project structure

describe('finputValidator', () => {
  let control: AbstractControl;

  beforeEach(() => {
    control = {
      value: null
    } as AbstractControl;
  });

  it('should return null for valid input "100k"', () => {
    const control = new FormControl('100k');
    const result = finputValidator(control);
    expect(result).toBeNull();
  });

  it('should return null for valid input "250m"', () => {
    const control = new FormControl('250m');
    const result = finputValidator(control);
    expect(result).toBeNull();
  });

  it('should return null for valid input "1b"', () => {
    const control = new FormControl('1b');
    const result = finputValidator(control);
    expect(result).toBeNull();
  });

  it('should return null for valid input ".1b"', () => {
    const control = new FormControl('1b');
    const result = finputValidator(control);
    expect(result).toBeNull();
  });

  it('should return an error object for invalid input "100z"', () => {
    const control = new FormControl('100z');
    const result = finputValidator(control);
    expect(result).toEqual({ invalidFinput: '100z' });
  });

  it('should return an error object for invalid input "abc"', () => {
    const control = new FormControl('abc');
    const result = finputValidator(control);
    expect(result).toEqual({ invalidFinput: 'abc' });
  });

})