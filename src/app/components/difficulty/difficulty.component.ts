import { Component, effect, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SelectButtonModule as PrimeSelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-difficulty',
  imports: [PrimeSelectButtonModule, ReactiveFormsModule],
  templateUrl: './difficulty.component.html',
  styleUrl: './difficulty.component.css',
})
export class DifficultyComponent {
  numberOfGuessesEvent = output<number>();

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
        this.numberOfGuessesEvent.emit(value.numberOfGuesses!);
      });
    })
  }
}
