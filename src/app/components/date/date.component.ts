import { Component, effect, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { ResultsService } from '../../services/results.service';
@Component({
  selector: 'app-date',
  imports: [DatePickerModule, ReactiveFormsModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {

  resultsService = inject(ResultsService);

  form = new FormGroup({
    date: new FormControl<Date>(new Date())
  });

  constructor() {
    effect(() => {
      this.form.valueChanges.subscribe(value => {
        this.resultsService.date.set(value.date!);
      });
    })
  }
  
}
