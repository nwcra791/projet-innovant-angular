import { Component } from '@angular/core';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.template.html',
  styleUrls: [
    "../../../assets/dist/semantic.min.css"
  ],
})
export class LoginRegisterComponent  {
  name = 'Login Register';
  loginForm = {
    firstname: "",
    lastname: "",
  }

  registerForm = {
    firstname: "",
    lastname: "",
    email: ""
  }

  login(): void {
    console.log(this.loginForm.firstname);
  }

  register(): void {

  }
}
