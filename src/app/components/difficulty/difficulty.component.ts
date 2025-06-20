import { Component, effect, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectButtonModule as PrimeSelectButtonModule } from 'primeng/selectbutton';
import { SelectModule as PrimeSelectModule } from 'primeng/select';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-difficulty',
  imports: [PrimeSelectButtonModule, ReactiveFormsModule, PrimeSelectModule],
  templateUrl: './difficulty.component.html'
})
export class DifficultyComponent {

  resultsService = inject(ResultsService);

  form = new FormGroup({
    numberOfGuesses: new FormControl(12)
  });

  difficultyOptions = [
    { label: 'Standard - Extreme', value: 12 },
    { label: 'Standard - Classic', value: 13 },
    { label: 'Standard - Chill', value: 16 },
    { label: 'Sequence', value: 15 },
  ];

  constructor() {
    effect(() => {
      this.form.valueChanges.subscribe(value => {
        this.resultsService.numberOfGuesses.set(value.numberOfGuesses!);
      });
    })
  }
}
