import { Component,OnInit} from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subscribeCount: number = 0;
  emailForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private subscribeService: SubscribeService) {}
  ngOnInit() {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  createemailForm() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
   incrementCount(): void {
    this.subscribeService.incrementCount();
  }

  onSubmit() {
    // Form submission logic
    if (this.emailForm.valid) {
      console.log(this.emailForm.value);
      // You can send the form data to an API or perform any other actions here
    } 
  }

}
