import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../shared/email_regex';
interface IUser {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  reactiveForm!: FormGroup;
  user: IUser = {email: "",
    password: ""};
  submitted = false;
  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  
  }
  
  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }
 validate(): void {
    
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
 }
  submitUser(){

    let input = document.getElementById('myInput') as HTMLInputElement;
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }else{
      localStorage.setItem('user',input.value);
      this.router.navigate(['/dashboard']);
      alert("Signing in !!!");
    }

    this.user = this.reactiveForm.value;
    
  }
}
