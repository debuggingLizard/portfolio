import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  mailTest:boolean = true;
  http = inject(HttpClient);

  contactData: {
    name: string;
    email: string;
    message: string;
} = {
    name: "",
    email: "",
    message: "",
  };

  formSubmitted:boolean = false;
  messageSent:boolean = false;
  placeholderName:string = "Your Name";
  placeholderEmail:string = "Your Email";
  placeholderMessage:string = "Your Message";
  nameInvalid:string = "";
  emailInvalid:string = "";
  messageInvalid:string = "";
  validationIcons = {
    valid: "./assets/img/valid.svg",
    invalid: "./assets/img/invalid.svg",
  }
  
  checkForm(input:NgModel) {
    if (!input.valid) {
      if (input.name == 'name') {
        this.nameInvalid = 'is-invalid';
        this.placeholderName = 'Your Name is required';
      } else if (input.name == 'email') {
        this.emailInvalid = 'is-invalid';
        this.placeholderEmail = 'Your Email is required';
      } else if (input.name == 'message') {
        this.messageInvalid = 'is-invalid';
        this.placeholderMessage = 'Your Message is required';
      }
    } else {
      if (input.name == 'name') {
        this.nameInvalid = '';
        this.placeholderName = 'Your Name';
      } else if (input.name == 'email') {
        this.emailInvalid = '';
        this.placeholderEmail = 'Your Email';
      } else if (input.name == 'message') {
        this.messageInvalid = '';
        this.placeholderMessage = 'Your Message';
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

  onSubmit(ngForm: NgForm, name:NgModel, email:NgModel, message:NgModel) {
    this.checkForm(name);
    this.checkForm(email);
    this.checkForm(message);
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
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
