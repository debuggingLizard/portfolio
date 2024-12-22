import { Component, inject } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  translate = inject(TranslationService);

  menuToggle:string = "";

  toggleMenu() { 
    this.menuToggle = this.menuToggle == "" ? "open" : "";
  }
}
