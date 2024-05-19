import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-roman-input',
  templateUrl: './roman-input.component.html',
  styleUrls: ['./roman-input.component.css']
})
export class RomanInputComponent {
  romanInput: string = '';
  errorMessage: string | null = null;
  translations: { roman: string, decimal: number }[] = [];
  windowWidth: number;
  isDarkMode: boolean = false;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = (event.target as Window).innerWidth;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  validateRomanNumeral() {
    const romanRegex = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i;
    if (this.romanInput.match(romanRegex)) {
      const decimalValue = this.romanToDecimal(this.romanInput.toUpperCase());
      this.translations.unshift({ roman: this.romanInput.toUpperCase(), decimal: decimalValue });
      this.errorMessage = null;
      this.romanInput = '';
    } else {
      this.errorMessage = 'Número invalido';
    }
  }

  romanToDecimal(roman: string): number {
    const romanNumerals: { [key: string]: number } = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      const current = romanNumerals[roman[i]];
      const next = romanNumerals[roman[i + 1]];
      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    return total;
  }
  
  deleteTranslation(index: number) {
    this.translations.splice(index, 1);
  }

  editTranslation(index: number, updatedTranslation: { roman: string, decimal: number }) {
    this.translations[index] = updatedTranslation;
  }
}
