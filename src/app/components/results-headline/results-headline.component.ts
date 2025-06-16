import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results-headline',
  imports: [DatePipe],
  templateUrl: './results-headline.component.html',
  styleUrl: './results-headline.component.css'
})
export class ResultsHeadlineComponent {
  resultsService = inject(ResultsService);

  get authorPrefix() {
    const author = this.resultsService.author();
    return (author === '') ? '' : (author + ' - ');
  }
}
