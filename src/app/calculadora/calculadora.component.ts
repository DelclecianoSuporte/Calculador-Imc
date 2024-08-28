import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  peso: number | null = null;
  altura: number | null = null;
  resultadoIMC: string = "";
  descricaoIMC: string = "";
  pesoIdeal: string = "";
  unidadeSelecionada: boolean = false; 

  imcRanges = [
    {
      descricao: "Baixo peso",
      peso_min: null,
      peso_max: 18.4
    },
    {
      descricao: "Peso normal",
      peso_min: 18.5,
      peso_max: 24.9
    },
    {
      descricao: "Sobrepeso",
      peso_min: 25,
      peso_max: 29.9
    },
    {
      descricao: "Obesidade grau I",
      peso_min: 30,
      peso_max: 34.9
    },
    {
      descricao: "Obesidade grau II",
      peso_min: 35,
      peso_max: 39.9
    },
    {
      descricao: "Obesidade grau III",
      peso_min: 40,
      peso_max: null
    }
  ];


  constructor() {}

  selecioneUnidade(unidade: string): void {
    this.unidadeSelecionada = true;
    if (unidade === 'metric') {
      alert('Por favor, insira o seu peso em kg e sua altura em cm.');
    }
  }

  calcularIMC(): void {
    if (this.peso !== null && this.altura !== null) {
      let alturaEmMetros = this.altura / 100;
      let imc = this.peso / (alturaEmMetros * alturaEmMetros);
      this.resultadoIMC = imc.toFixed(2);
      this.descricaoIMC = this.retornaDescricaoIMC(imc);
      this.pesoIdeal = this.calcularPesoIdeal(this.altura);
    }
  }

  retornaDescricaoIMC(imc: number): string {
    for (let faixa of this.imcRanges) {
      if ((faixa.peso_min === null || imc >= faixa.peso_min) && (faixa.peso_max === null || imc <= faixa.peso_max)) {
        return faixa.descricao;
      }
    }
    return "IMC fora do intervalo";
  }

  calcularPesoIdeal(altura: number): string {
    let alturaEmMetros = altura / 100;
    let pesoMin = (18.5 * (alturaEmMetros ** 2)).toFixed(2);
    let pesoMax = (24.9 * (alturaEmMetros ** 2)).toFixed(2);
    return `${pesoMin} kg - ${pesoMax} kg`;
  }
}
