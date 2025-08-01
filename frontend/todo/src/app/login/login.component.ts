import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = 'harsha';
  password = '';
  isInValid = false;
  errorMessage = 'Invalid Credentials';

  handleLogin() {
    const specialCharsRegex = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/`;

    console.log(`User name : ${this.username} and Password  ${this.password}`);
    if (this.username.includes('#')) {
      this.isInValid = true;
      console.log('Invalid Username');
    }
  }
}
