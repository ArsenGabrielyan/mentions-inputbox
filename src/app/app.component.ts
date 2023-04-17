import { Component } from '@angular/core';
import { IUserList } from './interface/userlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  txtInput = "";
  mentioned = false;
  suggestions:IUserList[] = [];
  handleInput(){
    const mention = this.txtInput.lastIndexOf("@");
    if(mention!==-1){
      const search = this.txtInput.substring(mention+1);
      this.suggestions = this.getUsers(search);
      this.mentioned = true;
    } else this.mentioned = false;
  }
  getUsers(query:string):IUserList[]{
    const users: IUserList[] = [
      {name: "Arsen Gabrielyan", selected: false},
      {name: "Gev Gabrielyan", selected: false},
      {name: "John Addams", selected: false},
      {name: "Tom Smith", selected: false},
      {name: "Leanne Graham", selected: false},
      {name: "Ervin Howell", selected: false},
      {name: "Clementine Bauch", selected: false},
      {name: "Patricia Lebsack", selected: false},
      {name: "Chelsey Dietrich", selected: false},
      {name: "Kurtis Weissnat", selected: false},
      {name: "Glenna Reichert", selected: false},
      {name: "Clementina DuBuque", selected: false},
      {name: "Petros Poghosyan", selected: false},
      {name: "Poghos Petrosyan", selected: false},
    ];
    return users.sort().filter(val=>val.name.toLowerCase().includes(query.toLowerCase()));
  }
  select(user:string){
    const mention = this.txtInput.lastIndexOf("@");
    const newText = this.txtInput.substring(0,mention+1)+user+" ";
    this.txtInput = newText;
    this.mentioned = false;
  }
  checkIndex(e:any){
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd+1;
    const mention = this.txtInput.lastIndexOf("@");
    if(mention!==-1){
      const search = this.txtInput.substring(start,end-start);
      search.split(" ").map((el)=>this.suggestions = this.getUsers(el));
      this.mentioned = true;
    } else this.mentioned = false;
  }
}