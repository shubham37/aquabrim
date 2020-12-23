import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  isPorceessing : boolean = false;

  formGroup : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: '',
      password: '',
      email: '',
      mobile: '',
      }
    )
  }

  onSumbit() {
    console.log(this.formGroup)
  }

}
