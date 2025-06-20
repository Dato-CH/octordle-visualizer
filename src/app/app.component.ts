import { Component, ElementRef, inject, viewChild } from '@angular/core';


import { ButtonModule as PrimeButtonModule } from 'primeng/button';
import { WordsComponent } from './components/words/words.component';
import { GuessesComponent } from './components/guesses/guesses.component';
import { ResultsComponent } from './components/results/results.component';
import { DateComponent } from './components/date/date.component';
import { DifficultyComponent } from './components/difficulty/difficulty.component';
import { ResultsHeadlineComponent } from './components/results-headline/results-headline.component';
import { AuthorComponent } from './components/author/author.component';
import { CaptureImageService } from './services/html-to-image.service';
import { TooltipComponent } from "./components/tooltip/tooltip.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PrimeButtonModule,
    WordsComponent,
    GuessesComponent,
    ResultsComponent,
    DateComponent,
    DifficultyComponent,
    ResultsHeadlineComponent,
    AuthorComponent,
    TooltipComponent
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
