import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  txtInput = "";
  mentioned = false;
  suggestions:string[] = [];
  handleKey(){
    const mention = this.txtInput.lastIndexOf("@");
    if(mention!==-1){
      const search = this.txtInput.substring(mention+1);
      this.suggestions = this.getUsers(search);
      this.mentioned = true;
    } else this.mentioned = false;
  }
  getUsers(query:string):string[]{
    const users: string[] = [
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
    return users.sort().filter(val=>val.toLowerCase().includes(query.toLowerCase()));
  }
  select(user:string){
    const mention = this.txtInput.lastIndexOf("@");
    const newText = this.txtInput.substring(0,mention+1)+user+" ";
    this.txtInput = newText;
    this.mentioned = false;
  }
}