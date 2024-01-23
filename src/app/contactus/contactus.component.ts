import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{

  myForm!: FormGroup;
 
   constructor(private formBuilder: FormBuilder) { }
 
   ngOnInit() {
     this.myForm = this.formBuilder.group({
       name: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       subject: ['', [Validators.required]],
       message: ['', [Validators.required]]
     });
   }
 
   onSubmit() {
     if (this.myForm.valid) {
       console.log('Form submitted!');
       console.log(this.myForm.value);
       // You can perform additional actions here, such as sending the form data to your backend server
     } else {
       console.log('Invalid form');
     }
   }
 }
