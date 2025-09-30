import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  standalone: true,
  imports:[NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string | undefined;
  @Input() size: 'little' | 'normal' = 'normal';
  @Output() clickEvent = new EventEmitter();
}
