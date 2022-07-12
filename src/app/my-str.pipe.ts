import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myStr'
})
export class MyStrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  
  word="";
  result="";
  print(){
    for(let index=0; index<this.word.length;index++){
      this.result=this.word[index]+this.result;

    }
  }
  
}
