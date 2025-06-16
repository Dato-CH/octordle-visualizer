import { Component, effect, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { wordFormControl } from '../../models/wordFormControl.model';

import { InputOtpModule as PrimeInputOtpModule } from 'primeng/inputotp';
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-words',
  imports: [PrimeFieldsetModule, PrimeInputOtpModule, ReactiveFormsModule, InputTextModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './words.component.html',
  styleUrl: './words.component.css'
})
export class WordsComponent {
  wordsEvent = output<string[]>();

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

  words2 = new FormControl()

  constructor() {
    effect(() => {
      this.words.valueChanges.subscribe(value => {

        const wordArray = Object.values(value ?? {}).map(v => v ?? '');
        this.wordsEvent.emit(wordArray as string[]);
      });
    })
  }


  getValidityClass(formControl: FormControl) {
    if (formControl.touched && formControl.invalid) return "ng-invalid";
    return '';
  }
}
