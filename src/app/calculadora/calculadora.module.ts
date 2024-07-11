import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [CalculadoraComponent],
})
export class CalculadoraModule { }