import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalculadoraModule } from './calculadora/calculadora.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}