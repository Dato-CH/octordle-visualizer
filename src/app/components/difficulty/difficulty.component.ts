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
    { label: 'Chill', value: 16 },
    { label: 'Classic', value: 13 },
    { label: 'Extreme', value: 12 },
  ];

  constructor() {
    effect(() => {
      this.form.valueChanges.subscribe(value => {
        this.resultsService.numberOfGuesses.set(value.numberOfGuesses!);
      });
    })
  }
}
