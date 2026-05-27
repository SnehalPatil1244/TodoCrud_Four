import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
isInEditMode : boolean = false
@Output() emitnewtodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
@Input() emitedittotos !: Itodo
@Output() emitupdateobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
@ViewChild('TodoForm') TodoForm !: NgForm

  constructor(private uuid : UuidService) { }

  ngOnChanges(changes: SimpleChanges): void {
   if(changes['emitedittotos'].currentValue){
    this.TodoForm.form.patchValue(this.emitedittotos)
    this.isInEditMode = true
   }
  }

  ngOnInit(): void {
  }
  onTodoSubmit(){
    if(this.TodoForm.valid){
      let todo : Itodo = {
        ...this.TodoForm.value, todoid : this.uuid.uuid()
      }
      this.TodoForm.reset()
      this.emitnewtodo.emit(todo)
    }

  }
  onUpdate(){
    if(this.TodoForm.valid){
      let updatedobj : Itodo = {
      ...this.TodoForm.value, todoid : this.emitedittotos.todoid
    }
    this.TodoForm.reset()
    this.isInEditMode = false
    this.emitupdateobj.emit(updatedobj)
  }

  }

}
