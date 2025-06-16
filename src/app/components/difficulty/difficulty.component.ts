import { Component, effect, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectButtonModule as PrimeSelectButtonModule } from 'primeng/selectbutton';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-difficulty',
  imports: [PrimeSelectButtonModule, ReactiveFormsModule],
  templateUrl: './difficulty.component.html',
  styleUrl: './difficulty.component.css',
})
export class DifficultyComponent {

  resultsService = inject(ResultsService);

  form = new FormGroup({
    numberOfGuesses: new FormControl(12)
  });

  difficultyOptions = [
    { label: '12', value: 12 },
    { label: '13', value: 13 },
    { label: '16', value: 16 },
  ];

  constructor() {
    effect(() => {
      this.form.valueChanges.subscribe(value => {
        this.resultsService.numberOfGuesses.set(value.numberOfGuesses!);
      });
    })
  }
}
