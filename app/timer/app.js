import {
    Component,
    NgModule,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app.html',
    styles: [
        `ul li {
list-style: none;
}
.completed {
text-decoration: line-through;
}`
    ],
    encapsulation: ViewEncapsulation.Emulate
})

class ToDoCtrl {
    todos: Todo[] = [{
        label: 'Buy milk',
        completed: false
    }, {
        label: 'Save the world',
        complted: false
    }];
name: string = 'Will';

addTodo(label) {...}

removeTodo(idx) {...}

toggleCompletion(idx) {...}

}