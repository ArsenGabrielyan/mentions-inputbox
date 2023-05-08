import { Component } from '@angular/core';
import { users } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  txtInput = "";
  selectedUser = "";
  userIndex = 0;
  mentioned = false;
  suggestions:string[] = [];
  handleInput(): void{
    const mention = this.txtInput.lastIndexOf("@");
    const words = this.txtInput.split(" ");
    const current = words[words.length-1];
    if(mention!==-1){
      const search = this.txtInput.substring(mention+1);
      this.suggestions = this.getUsers(search)
    } 
    this.mentioned = current.startsWith("@");
  }
  private getUsers(query:string): string[]{
    return users.sort().filter(val=>val.toLowerCase().includes(query.toLowerCase()));
  }
  select(user:string): void{
    const mentionStartI = this.txtInput.lastIndexOf("@");
    const mentionEndI = this.txtInput.length;
    const mention = user+" ";
    const words = this.txtInput.split(" ");
    const current = words[words.length-1];
    if(current.startsWith("@")){
      this.txtInput = this.txtInput.slice(0,mentionStartI+1)+mention+this.txtInput.slice(mentionEndI);
    } else {
      this.suggestions.map((el)=>{
        if(el===user) console.log(el);
      })
    }
    this.mentioned = false;
  }
  getMouseIndex(e:MouseEvent): void{
    if(!this.txtInput) return;
    const elem = e.target as HTMLInputElement;
    const start = elem.selectionStart!;
    const search = this.txtInput.substring(0,start);
    search.split("@").map((el)=>{
      if(!el) return;
      el.split(" ").map(word=>this.suggestions = this.getUsers(word));
      this.mentioned = true;
    });
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
  private selectUserByKey(type: string): void{
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