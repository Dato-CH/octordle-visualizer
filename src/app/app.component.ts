import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule as PrimeButtonModule } from 'primeng/button';
import { InputOtpModule as PrimeInputOtpModule } from 'primeng/inputotp';
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule as PrimeSelectButtonModule } from 'primeng/selectbutton';
import { WordsComponent } from "./components/words/words.component";
import { GuessesComponent } from "./components/guesses/guesses.component";
import { ResultsComponent } from "./components/results/results.component";
import { DateComponent } from "./components/date/date.component";
import { DifficultyComponent } from "./components/difficulty/difficulty.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrimeButtonModule, PrimeInputOtpModule, ReactiveFormsModule, PrimeFieldsetModule, PrimeSelectButtonModule, WordsComponent, GuessesComponent, ResultsComponent, DateComponent, DifficultyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  enteredWords: string[] = Array(8).fill('');
  enteredGuesses: string[] = Array(12).fill('');
  enteredDate: Date = new Date();
  enteredNumberOfGuesses: number = 12;


  guessCountOptions = [
    { label: 'Extreme', value: 12 },
    { label: 'Classic', value: 13 },
    { label: 'Chill', value: 16 },
  ];


  results = new FormGroup( {
    word1: resultFormGroup(),
    word2: resultFormGroup(),
    word3: resultFormGroup(),
    word4: resultFormGroup(),
    word5: resultFormGroup(),
    word6: resultFormGroup(),
    word7: resultFormGroup(),
    word8: resultFormGroup()
  });
}

function wordFormControl() {
  return new FormControl<string>('', {
    validators: [
      Validators.minLength(5),
      Validators.maxLength(5)
    ]
  });
}

function resultFormGroup() {
  return new FormGroup( {
    result01: new FormControl<'G'|'Y'|'X'>('X'),
    result02: new FormControl<'G'|'Y'|'X'>('X'),
    result03: new FormControl<'G'|'Y'|'X'>('X'),
    result04: new FormControl<'G'|'Y'|'X'>('X'),
    result05: new FormControl<'G'|'Y'|'X'>('X'),
    result06: new FormControl<'G'|'Y'|'X'>('X'),
    result07: new FormControl<'G'|'Y'|'X'>('X'),
    result08: new FormControl<'G'|'Y'|'X'>('X'),
    result09: new FormControl<'G'|'Y'|'X'>('X'),
    result10: new FormControl<'G'|'Y'|'X'>('X'),
    result11: new FormControl<'G'|'Y'|'X'>('X'),
    result12: new FormControl<'G'|'Y'|'X'>('X'),
  });
}
