import { Component, computed, input } from '@angular/core';
import { ResultBoxComponent } from "../result-box/result-box.component";
import { FieldsetModule as PrimeFieldsetModule } from 'primeng/fieldset';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [ResultBoxComponent, PrimeFieldsetModule, DatePipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  words = input.required<string[]>();
  guesses = input.required<string[]>();
  date = input.required<Date>()
  numberOfGuesses = input.required<number>()

  get difficultyText() {
    switch (this.numberOfGuesses()) {
      case (12): return "EXTREME";
      case (13): return "CLASSIC";
      case (16): return "CHILL";
      default: return "";
    }
  }

  getResultWithCutoff(word: string, guesses: string[]): ('G' | 'Y' | 'X' | '_')[][] {
    const results: ('G' | 'Y' | 'X' | '_')[][] = [];
    let solved = false;

    for (const guessObject of guesses) {
      var guess = guessObject;

      if (solved) {
        results.push(['_', '_', '_', '_', '_']);
        continue;
      }

      if (guess.length < 5) guess = guess.padEnd(5, '_');
      
      const result: ('G' | 'Y' | 'X')[] = Array(5).fill('X');
      const used = Array(5).fill(false);

      const wordLower = word.toLowerCase();
      const guessLower = guess.toLowerCase();
      const wordArr = wordLower.split('');
      const guessArr = guessLower.split('');
      
      // green pass
      for (let i = 0; i < 5; i++) {
        if (guessArr[i] === wordArr[i]) {
          result[i] = 'G';
          used[i] = true;
        }
      }

      // yellow pass
      for (let i = 0; i < 5; i++) {
        if (result[i] !== 'G') {
          const idx = wordArr.findIndex((char, j) => char === guessArr[i] && !used[j]);
          if (idx === -1) continue;
        
          result[i] = 'Y';
          used[idx] = true;  
        }
      }

      solved = result.every(r => r === 'G');

      results.push(result);
    }

    return results;
  }

}
