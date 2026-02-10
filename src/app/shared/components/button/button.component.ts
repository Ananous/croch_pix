import {NgClass} from '@angular/common';
import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  label = input<string>('Bouton');
  size = input<'little' | 'normal' | 'big'>('normal');
  variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  isDisable = input<boolean>(false);

  clickEvent = output<void>();

  handleClick() {
    if (!this.isDisable()) {
      this.clickEvent.emit();
    }
  }
}
