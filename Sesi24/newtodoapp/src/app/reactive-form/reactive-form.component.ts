import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  currentUser: {
    isLogin: boolean,
    username: string,
    password: string
  } = { isLogin: false, username: '', password: '' }

  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('')
  })

  get username(){
    return this.loginForm.get('username')
  }

  onLogin(){
    console.log(this.loginForm);

    this.currentUser = {
      isLogin: true,
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
