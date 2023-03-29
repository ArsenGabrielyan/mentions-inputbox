import { Component } from '@angular/core';
import { IUserList } from './interfaces/userlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: IUserList[] = [
    {name: "Arsen Gabrielyan",action: ()=>{this.txtInput=this.users[0].name;this.mentioned=false;}},
    {name: "Gev Gabrielyan",action: ()=>{this.txtInput=this.users[1].name;this.mentioned=false;}},
    {name: "John Addams",action: ()=>{this.txtInput=this.users[2].name;this.mentioned=false;}},
    {name: "Tom Smith",action: ()=>{this.txtInput=this.users[3].name;this.mentioned=false;}},
    {name: "Leanne Graham",action: ()=>{this.txtInput=this.users[4].name;this.mentioned=false;}},
    {name: "Ervin Howell",action: ()=>{this.txtInput=this.users[5].name;this.mentioned=false;}},
    {name: "Clementine Bauch",action: ()=>{this.txtInput=this.users[6].name;this.mentioned=false;}},
    {name: "Patricia Lebsack",action: ()=>{this.txtInput=this.users[7].name;this.mentioned=false;}},
    {name: "Chelsey Dietrich",action: ()=>{this.txtInput=this.users[8].name;this.mentioned=false;}},
    {name: "Kurtis Weissnat",action: ()=>{this.txtInput=this.users[9].name;this.mentioned=false;}},
    {name: "Glenna Reichert",action: ()=>{this.txtInput=this.users[10].name;this.mentioned=false;}},
    {name: "Clementina DuBuque",action: ()=>{this.txtInput=this.users[11].name;this.mentioned=false;}},
    {name: "Petros Poghosyan",action: ()=>{this.txtInput=this.users[12].name;this.mentioned=false;}},
    {name: "Poghos Petrosyan",action: ()=>{this.txtInput=this.users[13].name;this.mentioned=false;}},
    {name: "Armen Gabrielyan",action: ()=>{this.txtInput=this.users[14].name;this.mentioned=false;}},
  ];
  txtInput = "";
  mentioned = false;
  sortedUsers = this.users.sort();
  handleKey(){
    this.txtInput.trim()!=="" ? this.mentioned = true : this.mentioned = false;
  }
}