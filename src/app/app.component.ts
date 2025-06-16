import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule as PrimeButtonModule } from 'primeng/button';
import { InputOtpModule as PrimeInputOtpModule } from 'primeng/inputotp';
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule as PrimeSelectButtonModule } from 'primeng/selectbutton';
import { WordsComponent } from "./components/words/words.component";
import { GuessesComponent } from "./components/guesses/guesses.component";
import { ResultsComponent } from "./components/results/results.component";
import { DateComponent } from "./components/date/date.component";
import { DifficultyComponent } from "./components/difficulty/difficulty.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrimeButtonModule, PrimeInputOtpModule, ReactiveFormsModule, PrimeFieldsetModule, PrimeSelectButtonModule, WordsComponent, GuessesComponent, ResultsComponent, DateComponent, DifficultyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
