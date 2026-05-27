import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
todoArr: Array<Itodo> = [
    {
      todoid: '1',
      title: "Angular",
      completed: false
    },
    {
      todoid: '2',
      title: "Typescript",
      completed: true
    },
    {
      todoid: '3',
      title: "JavaScript ",
      completed: false
    },
    {
      todoid: '4',
      title: "Mongo DB",
      completed: true
    }
  ]
  constructor(private snackbar : SnackbarService) { }
geteditdata !: Itodo
  ngOnInit(): void {
  }
  onaddtodo(todo : Itodo){
    this.todoArr.push(todo)
    this.snackbar.opensnackbar(`The New Todo Item Is ${todo.title} Is Added Successfully !!`)
  }
  onremovetodo(todoid : string){
    let getindex = this.todoArr.findIndex(s => s.todoid === todoid)
    this.todoArr.splice(getindex,1)
    this.snackbar.opensnackbar(`The Todo Item Is Removed Successfully !!`)
  }

  onedittodo(todo : Itodo){
    this.geteditdata = todo

  }
  onupdatetodo(updatedobj : Itodo){
    let getindex = this.todoArr.findIndex(s => s.todoid === updatedobj.todoid)
    this.todoArr[getindex] = updatedobj
    this.snackbar.opensnackbar(`The  Todo Item Is ${updatedobj.title} Is Updated Successfully !!`)
  }

}
