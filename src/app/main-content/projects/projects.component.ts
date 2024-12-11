import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
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
        github: '',
        live: '',
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
        live: '',
      },
      screenshot: 'project-epl.png',
    },
  ];
}
