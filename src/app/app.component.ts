import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOListApp';
  TODOList = ['Exercise', 'Breakfast', 'Work'];
  task : string = '';

  addTODO(taskValue: any){
  console.log(taskValue);
  this.TODOList.push(taskValue.value);
  }
}
