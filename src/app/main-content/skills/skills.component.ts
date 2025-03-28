import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  translate = inject(TranslationService);

  skills: {
    skillName: string;
    skillIcon: string;
  }[] = [
    {
      skillName: 'Angular',
      skillIcon: 'icon-angular.svg',
    },
    {
      skillName: 'TypeScript',
      skillIcon: 'icon-typescript.svg',
    },
    {
      skillName: 'JavaScript',
      skillIcon: 'icon-javascript.svg',
    },
    {
      skillName: 'HTML',
      skillIcon: 'icon-html.svg',
    },
    {
      skillName: 'CSS',
      skillIcon: 'icon-css.svg',
    },
    {
      skillName: 'Rest-Api',
      skillIcon: 'icon-restapi.svg',
    },
    {
      skillName: 'Firebase',
      skillIcon: 'icon-firebase.svg',
    },
    {
      skillName: 'GIT',
      skillIcon: 'icon-git.svg',
    },
    {
      skillName: 'Scrum',
      skillIcon: 'icon-scrum.svg',
    },
  ];
}
