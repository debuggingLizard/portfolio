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
      name: 'David Werner',
      project: 'Project Sharkie',
      text: '‘’Working with Lisa was fantastic. She has a highly organised approach, is helpful, friendly and very committed. I would work with her again and again!’’',
    },
    {
      name: 'Maedeh Khonsari',
      project: 'Project Pollo Loco',
      text: '‘’I had the pleasure of working with Lisa in a team during our training programme. She was always committed, reliable and carried out her tasks with great care and responsibility. Her proactive way of working and her ability to remain structured even in challenging situations greatly enriched our team. I can absolutely recommend Lisa as a competent and motivated team player.‘’',
    },
    {
      name: 'Tümay Batman',
      project: 'Project Join',
      text: '‘’Lisa was an incredible support for our Join project. With her commitment, expertise and helpfulness, she made a significant contribution to its success. Whether it was about creative solutions, supporting the team or solving complex tasks - she was always reliable and motivated.’’',
    },
  ];
}
