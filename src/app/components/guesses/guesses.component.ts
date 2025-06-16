import { Component, effect, ElementRef, inject, input, output, QueryList, signal, ViewChildren } from '@angular/core';

import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { wordFormControl } from '../../models/wordFormControl.model';

import { InputTextModule } from 'primeng/inputtext';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-guesses',
  imports: [ReactiveFormsModule, InputTextModule],
  templateUrl: './guesses.component.html',
  styleUrl: './guesses.component.css'
})
export class GuessesComponent {
  resultsService = inject(ResultsService);

  guesses = new FormGroup({
    guess01: wordFormControl(),
    guess02: wordFormControl(),
    guess03: wordFormControl(),
    guess04: wordFormControl(),
    guess05: wordFormControl(),
    guess06: wordFormControl(),
    guess07: wordFormControl(),
    guess08: wordFormControl(),
    guess09: wordFormControl(),
    guess10: wordFormControl(),
    guess11: wordFormControl(),
    guess12: wordFormControl(),

    guess13: wordFormControl(),

    guess14: wordFormControl(),
    guess15: wordFormControl(),
    guess16: wordFormControl(),
  })

  constructor() {
    effect(() => {
      this.guesses.valueChanges.subscribe(value => {
        const wordArray = Object.values(value ?? {}).map(v => v ?? '');
        this.resultsService.guesses.set(wordArray)
      });
    })
  }
}
