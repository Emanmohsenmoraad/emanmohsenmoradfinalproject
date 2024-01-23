import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribeService } from '../subscribe.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit {
  registrationForm!: FormGroup;
  subscribeCount: number = 0;
  constructor(private formBuilder: FormBuilder,private subscribeService: SubscribeService) { }

  ngOnInit() {
    this.createRegistrationForm();
    this.subscribeService.countChanged.subscribe(count => {
      this.subscribeCount = count;
    }); ;
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      // Define your form controls and their validations
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  incrementCount(): void {
    this.subscribeService.incrementCount();
  }

  onSubmit() {
    // Form submission logic
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // You can send the form data to an API or perform any other actions here
    } 
  }

}