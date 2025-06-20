import { Component, effect, inject } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';

import { ResultsService } from '../../services/results.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-author',
  imports: [InputTextModule, FluidModule, ReactiveFormsModule],
  templateUrl: './author.component.html'
})
export class AuthorComponent {
  resultsService = inject(ResultsService);

  form = new FormGroup({
    author: new FormControl<string>('')
  })

  constructor() {
    effect(() => {
      this.form.valueChanges.subscribe(value => {
        this.resultsService.author.set(value.author!)
      });
    })
  }
}
