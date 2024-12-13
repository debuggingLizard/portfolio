import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  constructor(private router: Router) {}

  translate = inject(TranslationService);

  openInNewTab(url: string) {
    const baseUrl = this.router.serializeUrl(this.router.createUrlTree([url]));
    window.open(baseUrl, '_blank', 'noopener noreferrer');
  }

  mailTest: boolean = true;
  http = inject(HttpClient);

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
    name: '',
    email: '',
    message: '',
  };

  formSubmitted: boolean = false;
  messageSent: boolean = false;
  placeholderName: string = 'Name';
  placeholderEmail: string = 'Email';
  placeholderMessage: string = 'Message';
  nameInvalid: string = '';
  emailInvalid: string = '';
  messageInvalid: string = '';
  validationIcons = {
    valid: './assets/img/valid.svg',
    invalid: './assets/img/invalid.svg',
  };

  checkForm(input: NgModel) {
    if (!input.valid) {
      if (input.name == 'name') {
        this.nameInvalid = 'is-invalid';
        this.placeholderName = 'Name is required';
      } else if (input.name == 'email') {
        this.emailInvalid = 'is-invalid';
        this.placeholderEmail = 'Email is required';
      } else if (input.name == 'message') {
        this.messageInvalid = 'is-invalid';
        this.placeholderMessage = 'Message is required';
      }
    } else {
      if (input.name == 'name') {
        this.nameInvalid = '';
        this.placeholderName = 'Name';
      } else if (input.name == 'email') {
        this.emailInvalid = '';
        this.placeholderEmail = 'Email';
      } else if (input.name == 'message') {
        this.messageInvalid = '';
        this.placeholderMessage = 'Message';
      }
    }
  }

  checkBoxChange() {
    this.formSubmitted = false;
  }

  resetMessageSent() {
    if (this.messageSent == true) {
      this.messageSent = false;
    }
  }

  post = {
    endPoint: 'https://lisamariemaliga.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm, name: NgModel, email: NgModel, message: NgModel) {
    this.checkForm(name);
    this.checkForm(email);
    this.checkForm(message);
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.formSubmitted = false;
            this.messageSent = true;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.formSubmitted = false;
      this.messageSent = true;
    }
  }
}
