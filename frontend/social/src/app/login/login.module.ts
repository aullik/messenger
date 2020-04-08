import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
