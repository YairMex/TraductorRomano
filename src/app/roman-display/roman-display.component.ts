import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roman-display',
  templateUrl: './roman-display.component.html',
  styleUrls: ['./roman-display.component.css']
})
export class RomanDisplayComponent {
  @Input() roman: string = '';
  @Input() decimal: number = 0;
  @Input() isDarkMode: boolean = false;
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<{roman: string, decimal: number}>();

  isEditing: boolean = false;
  editedRoman: string = '';

  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    this.isEditing = true;
    this.editedRoman = this.roman;
  }

  saveEdit() {
    const newDecimal = this.romanToDecimal(this.editedRoman.toUpperCase());
    if (newDecimal !== null) {
      this.roman = this.editedRoman.toUpperCase();
      this.decimal = newDecimal;
      this.edit.emit({ roman: this.roman, decimal: this.decimal });
      this.isEditing = false;
    } else {
      alert('Número romano no válido');
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }

  romanToDecimal(roman: string): number | null {
    const romanPattern = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
    if (!romanPattern.test(roman)) {
      return null;
    }
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
}

