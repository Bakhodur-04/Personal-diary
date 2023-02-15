import { Component, Input } from '@angular/core';
import { ButtonColor, ButtonSize } from './types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

/**
 * Class for button component.
 */
export class ButtonComponent {
  @Input() color: ButtonColor = 'default';
  @Input() size: ButtonSize = 'default';
  @Input() title: string = 'button title';
  @Input() isActive!: boolean;
  @Input() isDisabled!: boolean;
  @Input() value!: string;
  @Input() trigger: 'click' = 'click';

}
