import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'src/app/types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Output() delete = new EventEmitter();
  @Output() rename = new EventEmitter<string>();
  @Output() toggle = new EventEmitter();


  @Input() todo!: Todo;

  @ViewChild('titleField')
  set titleField(field: ElementRef) {
    if (field) {
      field.nativeElement.focus();
    }
  }

  editing = false;
  title = ''

  edit(){
    this.editing = true;
    this.title = this.todo.title;
  }

  save(){
    if(!this.editing) {
      return;
    }

    this.editing = false;
    this.rename.emit(this.title);
  }
}
