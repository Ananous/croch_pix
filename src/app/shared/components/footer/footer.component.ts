import {Component} from '@angular/core';
import {LinkComponent} from '../link/link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  imports: [
    LinkComponent
  ],
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
