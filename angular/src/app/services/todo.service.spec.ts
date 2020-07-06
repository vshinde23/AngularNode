import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { TodoService } from './todo.service';
import { TODO } from '../models/todo';

describe('TodoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let todoService: TodoService;

  describe('#getList()', () => {
      beforeEach(async() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [TodoService]
        })
        .compileComponents();

        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        todoService = TestBed.get(TodoService);
      });

      afterEach(() => {
        httpTestingController.verify();
      });

      it('should return expected todos', () => {
        const expectedTodos =
        [
          {
            'title': 'Mobile',
            'id': 2
          }
        ];
        todoService.getList().subscribe(
          data => expect(data).toEqual(expectedTodos, 'should return list'),
          fail
        );
        const req = httpTestingController.expectOne('http://localhost:8001/getProducts');
        expect(req.request.method).toEqual('GET');
        req.flush(expectedTodos);
      });

  });

  describe('#deleteTodo', () => {
    beforeEach(async() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TodoService]
      })
      .compileComponents();

      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
      todoService = TestBed.get(TodoService);
    });

    afterEach(() => {
      httpTestingController.verify();
    });

    it('should make DELETE request', () => {
      const expectedTodos = {
          'title': 'mobile',
          'id': 2,
      };
      const deleteUrl = `${todoService.baseUrl}/${expectedTodos.id}`;
      todoService.deleteTodo(expectedTodos.id).subscribe();
      const req = httpTestingController.expectOne('http://localhost:8001/deleteProduct/2');
      expect(req.request.method).toBe('DELETE');
      req.flush(expectedTodos);
    });
  });
});
