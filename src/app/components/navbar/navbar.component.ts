import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  mobileVisible: boolean;

constructor() {
  this.mobileVisible = false;

}
  toggleMenu(): void {
    this.mobileVisible = !this.mobileVisible;
  }
}
