import { TODO } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatIconModule],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    todoService = fixture.debugElement.injector.get(TodoService);
    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
      spyOn(component, 'getTodos');
      component.ngOnInit();
      fixture.detectChanges();

      expect(component.getTodos).toHaveBeenCalled();
  });

});
