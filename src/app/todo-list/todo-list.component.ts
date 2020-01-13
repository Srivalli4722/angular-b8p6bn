import { Component} from '@angular/core';

interface Task {
  name: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  inputValue: string = ''
  list: Array<Task> = [
    {name: 'task 1',
    isCompleted: true },
    {name: 'task 2',
    isCompleted: false }
  ];

  addTask() {
    if (this.inputValue.trim() !== ""){
      this.add(this.inputValue);
      this.inputValue = '';
    }
  }
  
  private add(name: string): void {
    this.list.push({
      name: name,
      isCompleted: false
    })
  };
  //style1:string;
 isButtonVisible = true;
  remove(i: number):void {
    //this.style1="style";
   this.isButtonVisible =false;

  }

}