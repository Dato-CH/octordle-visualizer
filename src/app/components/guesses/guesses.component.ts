import { Component, effect, ElementRef, input, output, QueryList, signal, ViewChildren } from '@angular/core';

import { InputOtp, InputOtpModule as PrimeInputOtpModule } from 'primeng/inputotp';
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { wordFormControl } from '../../models/wordFormControl.model';

import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-guesses',
  imports: [PrimeFieldsetModule, PrimeInputOtpModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './guesses.component.html',
  styleUrl: './guesses.component.css'
})
export class GuessesComponent {
  numberOfGuesses = input<number>(15);
  guessesEvent = output<string[]>();
  guesses = signal(new FormArray<FormControl>([]));

  constructor() {
    effect(() => {
      const count = this.numberOfGuesses();
      const formArray = new FormArray<FormControl>([]);
      for (let i = 0; i < count; i++) {
        formArray.push(wordFormControl());
      }
      this.guesses.set(formArray);
    });

    effect(() => {
      this.guesses().valueChanges.subscribe(value => {
        const wordArray = value.map(v => v ?? '');
        this.guessesEvent.emit(wordArray);
      });
    });
  }

  getValidityClass(formControl: FormControl) {
    if (formControl.touched && formControl.invalid) return 'ng-invalid';
    return '';
  }
}
