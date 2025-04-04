import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent, title: "Lisa-Marie Maliga"},
    {path: 'legal', component: LegalNoticeComponent, title: "Legal Notice | Lisa-Marie Maliga"},
    {path: 'privacy', component: PrivacyPolicyComponent, title: "Privacy Policy | Lisa-Marie Maliga"}
];
