import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  word="";
  myStr="";
  print(){
    for(let index=0; index<this.word.length;index++){
      this.myStr=this.word[index]+this.myStr;

    }
  }
}
