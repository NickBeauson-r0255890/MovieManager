import { Component, OnInit, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-custom-validation-message',
  templateUrl: './custom-validation-message.component.html',
  styleUrls: ['./custom-validation-message.component.scss']
})
export class CustomValidationMessageComponent{

  @Input() controlName: string = '';

  constructor(
    @Optional() private controlContainer: ControlContainer) {
  }

  get form(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  get control(): FormControl {
    return this.form.get(this.controlName) as FormControl;
  }
}
