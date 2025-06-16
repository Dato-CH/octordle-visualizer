import { Component, effect, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'app-date',
  imports: [DatePickerModule, ReactiveFormsModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {

  dateEvent = output<Date>();

  form = new FormGroup({
    date: new FormControl<Date>(new Date())
  });

  constructor() {
    effect(() => {
      this.form.valueChanges.subscribe(value => {
        this.dateEvent.emit(value.date!);
      });
    })
  }
}
