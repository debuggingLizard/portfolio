import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  translate = inject(TranslationService);

  projects: {
    projectName: string;
    languages: string[];
    description: string;
    links: {
      github: string;
      live: string;
    };
    screenshot: string;
  }[] = [
    {
      projectName: 'Join',
      languages: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      links: {
        github: 'https://github.com/debuggingLizard/join',
        live: 'https://join.lisamariemaliga.com/login.html',
      },
      screenshot: 'project-join.png',
    },
    {
      projectName: 'El Pollo Loco',
      languages: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      links: {
        github: 'https://github.com/debuggingLizard/el-pollo-loco',
        live: 'https://el-pollo-loco.lisamariemaliga.com/index.html',
      },
      screenshot: 'project-epl.png',
    },
  ];
}
