import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  peso: number | null = null;
  altura: number | null = null;
  resultadoIMC: string;
  unidadeSelecionada: boolean = false; 

  constructor() {
    this.resultadoIMC = "";
  }

  selecioneUnidade(unidade: string): void {
    
    this.unidadeSelecionada = true;

    if (unidade === 'metric') {
      alert('Por favor, insira o seu peso em kg e sua altura em cm.');
    }
    // Se necessário, adicione aqui mais lógica para o sistema imperial
  }

  calcularIMC(): void {
    if (this.peso && this.altura) {
      let alturaEmMetros = this.altura / 100; // Converte cm para metros
      let imc = this.peso / (alturaEmMetros * alturaEmMetros);
      this.resultadoIMC = imc.toFixed(2); // Formata o resultado para duas casas decimais
    }
  }

}
