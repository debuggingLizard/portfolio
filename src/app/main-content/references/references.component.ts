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
      name: 'Meriem Weigert',
      project: 'Project Pollo Loco',
      text: '‘’I really enjoyed working with Lisa. Her helpfulness and perseverance had a positive influence on the project. I really appreciated her friendly and understanding manner. She always kept an overview so that the project could be completed successfully.‘’',
    },
    {
      name: 'Tümay Batman',
      project: 'Project Join',
      text: '‘’Lisa was an incredible support for our Join project. With her commitment, expertise and helpfulness, she made a significant contribution to its success. Whether it was about creative solutions, supporting the team or solving complex tasks - she was always reliable and motivated.’’',
    },
  ];
}
