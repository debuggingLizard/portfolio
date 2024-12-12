import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  translate = inject(TranslationService);

  constructor(private router: Router) {}

  openInNewTab(url: string) {
    const baseUrl = this.router.serializeUrl(this.router.createUrlTree([url]));
    window.open(baseUrl, '_blank', 'noopener noreferrer');
  }
}
