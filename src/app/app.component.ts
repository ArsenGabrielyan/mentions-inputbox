import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  txtInput = "";
  selectedUser = "";
  edited = "";
  userIndex = 0;
  mentioned = false;
  suggestions:string[] = [];
  handleInput(): void{
    const mention = this.txtInput.lastIndexOf("@");
    if(mention!==-1){
      const search = this.txtInput.substring(mention+1);
      this.suggestions = this.getUsers(search);
      this.mentioned = true;
    } else {
      this.mentioned = false;
      this.suggestions = [];
    }
    if(!this.suggestions.length) this.mentioned = false;
  }
  getUsers(query:string): string[]{
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
      "Glenna Reichert", 
      "Clementina DuBuque",
      "Petros Poghosyan", 
      "Poghos Petrosyan",
    ];
    return users.sort().filter(val=>val.toLowerCase().includes(query.toLowerCase()));
  }
  select(user:string): void{
    const words = this.txtInput.split(" "), word = `@${user} `; let i = words.length-1;
    if(words[i].startsWith("@")){
      words[i] = word;
    } else{
      words.push(word);
      i++;
    }
    this.txtInput = words.join(" ");
    this.mentioned = false;
  }
  checkIndex(e:MouseEvent): void{
    if(!this.txtInput) return;
    const elem = e.target as HTMLInputElement;
    const start = elem.selectionStart!;
    const end = elem.selectionEnd!;
    const search = this.txtInput.substring(start,end-start);
    search.split("@").map((el)=>{
      if(!el) {
        this.mentioned = false;
        return;
      }
      el.split(" ").map(word=>this.suggestions = this.getUsers(word));
      this.mentioned = true;
    });
    this.edited = search;
  }
  handleKey(e:KeyboardEvent): void{
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
  selectUserByKey(type: string): void{
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
  handleEnter(e:Event): void{
    e.preventDefault();
    if(!this.selectedUser || !this.mentioned) return;
    this.select(this.selectedUser);
  }
}