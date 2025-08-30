import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {IUser} from "../user/user.model";
import {UserService} from "../user/user.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (user) => {this.user = user},
      error: (err) => console.error('Error fetching user', err)
    });
  }

  toggleSignOutMenu(){
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(){
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
