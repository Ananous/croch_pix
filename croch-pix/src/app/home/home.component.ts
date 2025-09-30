import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { ButtonComponent } from '../shared/components/button/button.component';
import { TitleComponent } from "../shared/components/title/title.component";
import { SubtitleComponent } from "../shared/components/subtitle/subtitle.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, ButtonComponent, TitleComponent, SubtitleComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) { }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  importImage() {
    this.router.navigate(['/login']);
  }
  createNew() {
    this.router.navigate(['/new']);
  }
}
