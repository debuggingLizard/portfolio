import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  constructor(private router: Router) {}

  openInNewTab(url: string) {
    const baseUrl = this.router.serializeUrl(this.router.createUrlTree([url]));
    window.open(baseUrl, '_blank', 'noopener noreferrer');
  }
}
