import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomValidationMessageComponent } from './custom-validation-message/custom-validation-message.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    CustomValidationMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CustomInputComponent,
    CustomValidationMessageComponent
  ]
})
export class CustomsModule { }
