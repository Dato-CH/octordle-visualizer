import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

words = signal(Array.from({ length: 8 }, () => ''));
guesses = signal(Array.from({ length: 16 }, () => ''));
  date = signal<Date>(new Date());
  numberOfGuesses = signal<number>(12);

  wordResults = computed(() => 
    this.words().map(word =>
      this.getResultWithCutoff(word, this.guesses().slice(0, this.numberOfGuesses()))
    )
  );

  DIFFICULTY_MAP: Record<number, string> = {
    12: 'EXTREME',
    13: 'CLASSIC',
    16: 'CHILL',
  };

  difficultyText = computed(() => this.DIFFICULTY_MAP[this.numberOfGuesses()] ?? '');

  private getResultWithCutoff(word: string, guesses: string[]): ('G' | 'Y' | 'X' | '_')[][] {
    const results: ('G' | 'Y' | 'X' | '_')[][] = [];
    let solved = false;

    for (const guessInput of guesses) {
      let guess = guessInput;
      if (solved) {
        results.push(['_', '_', '_', '_', '_']);
        continue;
      }

      if (guess.length < 5) guess = guess.padEnd(5, '_');

      const result: ('G' | 'Y' | 'X')[] = Array(5).fill('X');
      const used = Array(5).fill(false);

      const wordArr = word.toLowerCase().split('');
      const guessArr = guess.toLowerCase().split('');

      // Green pass
      for (let i = 0; i < 5; i++) {
        if (guessArr[i] === wordArr[i]) {
          result[i] = 'G';
          used[i] = true;
        }
      }

      // Yellow pass
      for (let i = 0; i < 5; i++) {
        if (result[i] !== 'G') {
          const idx = wordArr.findIndex((char, j) => char === guessArr[i] && !used[j]);
          if (idx !== -1) {
            result[i] = 'Y';
            used[idx] = true;
          }
        }
      }

      solved = result.every(r => r === 'G');
      results.push(result);
    }

    return results;
  }
}
