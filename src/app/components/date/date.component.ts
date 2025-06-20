import { Component, effect, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { ResultsService } from '../../services/results.service';
@Component({
  selector: 'app-date',
  imports: [DatePickerModule, ReactiveFormsModule, FluidModule],
  templateUrl: './date.component.html'
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
