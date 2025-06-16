import { Component, computed, inject, input } from '@angular/core';
import { ResultBoxComponent } from "../result-box/result-box.component";
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results',
  imports: [ResultBoxComponent, PrimeFieldsetModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  resultsService = inject(ResultsService);
}
