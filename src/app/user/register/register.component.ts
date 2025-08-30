import {Component} from '@angular/core';
import {IUser} from "../user.model";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bot-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: IUser = {
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: ''
  };

  registerError: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  signUp() {
    this.userService.signUp(this.credentials)
      .subscribe({
        next: () => this.router.navigate(["/catalog"]),
        error: () => (this.registerError = true)
      });
  }
}
