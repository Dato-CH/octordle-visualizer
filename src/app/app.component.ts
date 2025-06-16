import { Component, ElementRef, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { ButtonModule as PrimeButtonModule } from 'primeng/button';
import { InputOtpModule as PrimeInputOtpModule } from 'primeng/inputotp';
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule as PrimeSelectButtonModule } from 'primeng/selectbutton';
import { WordsComponent } from './components/words/words.component';
import { GuessesComponent } from './components/guesses/guesses.component';
import { ResultsComponent } from './components/results/results.component';
import { DateComponent } from './components/date/date.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { ResultsHeadlineComponent } from './components/results-headline/results-headline.component';
import { AuthorComponent } from './components/author/author.component';
import { CaptureImageService } from './services/html-to-image.service';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PrimeButtonModule,
    PrimeInputOtpModule,
    ReactiveFormsModule,
    PrimeFieldsetModule,
    PrimeSelectButtonModule,
    WordsComponent,
    GuessesComponent,
    ResultsComponent,
    DateComponent,
    DifficultyComponent,
    ResultsHeadlineComponent,
    AuthorComponent,
    FluidModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  captureTarget = viewChild<ElementRef<HTMLElement>>('captureTarget');
  captureService = inject(CaptureImageService);

  copy() {
    if (this.captureTarget()) {
      this.captureService.captureAndCopy(this.captureTarget()!.nativeElement);
    } else {
      console.error('Capture target not found!');
    }
  }

  get copyButtonText() {
    if (this.captureService.copying()) return "Copying...";
    if (this.captureService.copied()) return "Copied!";
    return "Copy Image";
  }

  get copyButtonIsDisabled() {
    if (this.captureService.copying() || this.captureService.copied()) return true;
    return false;
  }
}
