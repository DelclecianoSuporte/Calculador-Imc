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
  unidadeSelecionada: string | null = null;

  unidadePeso: string = 'kg';
  unidadeAltura: string = 'cm';

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
    this.unidadeSelecionada = unidade;

    if (unidade === 'metric') {
      alert('Por favor, insira o seu peso em kg e sua altura em cm.');
      this.unidadePeso = 'kg';
      this.unidadeAltura = 'cm';
    } else if (unidade === 'imperial') {
      alert('Por favor, insira o seu peso em libras e sua altura em polegadas.');
      this.unidadePeso = 'lbs';
      this.unidadeAltura = 'in';
    }

    this.calcularIMC();
  }

  calcularIMC(): void {
    if (this.peso !== null && this.altura !== null) {
      let imc: number;

      if (this.unidadeSelecionada === 'imperial') {
        imc = (this.peso as number) * 703 / ((this.altura as number) ** 2);
      } 
      else {
        let alturaEmMetros = (this.altura as number) / 100;
        imc = (this.peso as number) / (alturaEmMetros * alturaEmMetros);
      }

      this.resultadoIMC = imc.toFixed(2);
      this.descricaoIMC = this.retornaDescricaoIMC(imc);
      this.pesoIdeal = this.calcularPesoIdeal();
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

  calcularPesoIdeal(): string {
    let alturaEmMetros: number;
    if (this.unidadeSelecionada === 'imperial') {
      // Converter polegadas para metros
      alturaEmMetros = (this.altura as number) * 0.0254;
    } 
    else {
      alturaEmMetros = (this.altura as number) / 100;
    }

    let pesoMinKg = 18.5 * (alturaEmMetros ** 2);
    let pesoMaxKg = 24.9 * (alturaEmMetros ** 2);

    if (this.unidadeSelecionada === 'imperial') {
      // Converter kg para libras
      pesoMinKg *= 2.20462;
      pesoMaxKg *= 2.20462;
    }
    return `${pesoMinKg.toFixed(2)} ${this.unidadeSelecionada === 'imperial' ? 'lbs' : 'kg'} - ${pesoMaxKg.toFixed(2)} ${this.unidadeSelecionada === 'imperial' ? 'lbs' : 'kg'}`;
  }
}
