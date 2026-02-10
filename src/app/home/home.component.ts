import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FooterComponent} from "../shared/components/footer/footer.component";
import {ButtonComponent} from '../shared/components/button/button.component';
import {TitleComponent} from "../shared/components/title/title.component";
import {SubtitleComponent} from "../shared/components/subtitle/subtitle.component";
import {LinkComponent} from '../shared/components/link/link.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, ButtonComponent, TitleComponent, SubtitleComponent, LinkComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);

  goToLogin() {
    this.router.navigate(['/login']);
  }

  createNew() {
    this.router.navigate(['/new']);
  }

  importImage() {
    this.router.navigate(['/new']);
  }

  goToTemplates() {
    console.log("Page modèles non créée pour l'instant");
  }
}
