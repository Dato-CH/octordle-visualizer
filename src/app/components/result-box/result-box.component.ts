import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result-box',
  imports: [],
  templateUrl: './result-box.component.html',
  styleUrl: './result-box.component.css'
})
export class ResultBoxComponent {
  color = input.required<'G'|'Y'|'X'|'_'>()

  get boxColoring() {
    switch (this.color()) {
      case ("G"): return 'background-color: #538d4e';
      case ("Y"): return 'background-color: #b59f3b';
      case ("X"): return 'background-color: #3a3a3c';
      case ("_"): return 'border-color: #3a3a3c; border-width: 1px;';
      default: return 'background-color: red';
    }
  }

  get boxStyle() {
    return 'border-radius: 2px;' + this.boxColoring;
  }
}
