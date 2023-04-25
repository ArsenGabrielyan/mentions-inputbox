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
  userIndex = 0;
  selectedUser = "";
  handleInput(){
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
      "Poghos Petrosyan",
    ];
    return users.sort().filter(val=>val.toLowerCase().includes(query.toLowerCase()));
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
    const search = this.txtInput.substring(start,end-start);
    search.split("@").map((el)=>{
      if(!el) return;
      el.split(" ").map(word=>this.suggestions = this.getUsers(word));
      this.mentioned = true;
    })
  }
  handleKey(e:any){
    e.preventDefault();
    if(!this.mentioned) return;
    switch(e.key){
      case "ArrowUp":
        this.selectUserByKey("prev");
        break;
      case "ArrowDown":
        this.selectUserByKey("next");
        break;
    }
  }
  selectUserByKey(type: string){
    switch(type){
      case "next":
        this.userIndex++;
        if(this.suggestions[this.userIndex]===undefined) this.userIndex = 0;
        this.selectedUser = this.suggestions[this.userIndex];
        break;
      case "prev":
        this.userIndex--;
        if(this.suggestions[this.userIndex]===undefined) this.userIndex = this.suggestions.length-1;
        this.selectedUser = this.suggestions[this.userIndex];
        break;
    }
  }
  handleEnter(e:any){
    e.preventDefault();
    if(!this.selectedUser || !this.mentioned) return;
    const mention = this.txtInput.lastIndexOf("@");
    const newText = this.txtInput.substring(0,mention+1)+this.selectedUser+" ";
    this.txtInput = newText;
    this.mentioned = false;
  }
}