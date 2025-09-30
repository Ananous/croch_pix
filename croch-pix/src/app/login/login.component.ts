import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { ButtonComponent } from "../shared/components/button/button.component";
import { TitleComponent } from "../shared/components/title/title.component";
import { SubtitleComponent } from "../shared/components/subtitle/subtitle.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ButtonComponent, TitleComponent, SubtitleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) { }

  onLogin() {
    this.router.navigate(['']);
  }
  goToHome() {
    this.router.navigate(['']);
  }
}
