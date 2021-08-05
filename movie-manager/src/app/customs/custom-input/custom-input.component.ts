import { Component, OnInit, Input, Self, Optional, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements ControlValueAccessor {
/*https://ritchiejacobs.be/angular-custom-form-component*/

  @Input() label: string = 'label';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'number' | 'password' = 'text';

  disabled = false;
  value: any= ' ';

  constructor(
    @Self()       //Decorator - retrieve the dependency only from the local injector, not from parents
    @Optional()   //Decorator - able to use the component without a form
    private ngControl: NgControl  //Used to bind to FormControl object to the DOM element
  ) { if(this.ngControl){
        this.ngControl.valueAccessor = this;
    }
  }

  //Called every time the form model is updated
  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

}
