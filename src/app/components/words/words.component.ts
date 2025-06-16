import { Component, computed, effect, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { wordFormControl } from '../../models/wordFormControl.model';

import { InputOtpModule as PrimeInputOtpModule } from 'primeng/inputotp';
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-words',
  imports: [PrimeFieldsetModule, PrimeInputOtpModule, ReactiveFormsModule, InputTextModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent {
  resultsService = inject(ResultsService);

  words = new FormGroup( {
    word1: wordFormControl(),
    word2: wordFormControl(),
    word3: wordFormControl(),
    word4: wordFormControl(),
    word5: wordFormControl(),
    word6: wordFormControl(),
    word7: wordFormControl(),
    word8: wordFormControl(),
  });

  constructor() {
    effect(() => {
      this.words.valueChanges.subscribe(value => {
        const wordArray = Object.values(value ?? {}).map(v => v ?? '');
        this.resultsService.words.set(wordArray); 
      });
    })
  }


  getValidityClass(formControl: FormControl) {
    if (formControl.touched && formControl.invalid) return "ng-invalid";
    return '';
  }
}
