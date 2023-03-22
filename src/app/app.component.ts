import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: string[] = [
    "Arsen Gabrielyan",
    "Gev Gabrielyan",
    "John Addams",
    "Tom Smith",
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich",
    "Kurtis Weissnat",
    "Glenna Reichert",
    "Clementina DuBuque",
    "Petros Poghosyan",
    "Poghos Petrosyan"
  ];
  txtInput = "";
  mentioned = false;
  sortedUsers = this.users.sort();
  handleKey(){
    this.txtInput.trim()!=="" ? this.mentioned = true : this.mentioned = false;
  }
}