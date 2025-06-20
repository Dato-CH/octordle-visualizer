import { Component } from '@angular/core';

import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tooltip',
  imports: [BadgeModule, TooltipModule],
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
  tooltipOptions = {
      showDelay: 150,
      autoHide: false,
      tooltipEvent: 'hover'
    }
}
