import { TODO } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    title = 'Simple Angular app';
    todos = [];
    displayedColumns: string[] = ['id', 'title', 'category', 'product', 'action'];

    constructor(private todoService: TodoService) { };

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.todoService.getList()
            .subscribe(todosList => {
                this.todos = todosList;
                console.log('Fetched Todos', this.todos);
            } );
    }

    deleteTodo(id) {
        console.log(id,'id');
        this.todoService.deleteTodo(id)
        .subscribe ( response => {
            console.log(response,'response');
            this.getTodos();
            }
        );
    }
}
