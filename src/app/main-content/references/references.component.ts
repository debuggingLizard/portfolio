import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  translate = inject(TranslationService);

  references: {
    name: string;
    project: string;
    text: string;
  }[] = [
    {
      name: 'Noah Mueller',
      project: 'Project Sharkie',
      text: '‘’Marcus had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
    },
    {
      name: 'Evelyn Marx',
      project: 'Project Pollo Loco',
      text: '‘’ He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
    },
    {
      name: 'James Rugman',
      project: 'Project Join',
      text: '‘’ He is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
    },
  ];
}
