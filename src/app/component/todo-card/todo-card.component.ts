import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/model/todo';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
@Input() gettodos !: Array<Itodo>
@Output() getremoveid : EventEmitter<string> = new EventEmitter<string>()
@Output() emiteditobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor(private matdialog : MatDialog) { }

  ngOnInit(): void {
  }
  onRemove(todoid : string){
    let config = new MatDialogConfig()
   config.width = '300px'
   config.disableClose = true
   config.data = `Are You Sure ?You Want To Remove The Id ${todoid}`

   let matref = this.matdialog.open(GetConfirmationComponent,config)
   matref.afterClosed().subscribe(confirmation =>{
    if(confirmation){
      this.getremoveid.emit(todoid)
    }
   })
  }
  onEdit(todo : Itodo){
    this.emiteditobj.emit(todo)

  }
  TrackByfunc(index : number, todo : Itodo){
    return todo.todoid
  }

}
