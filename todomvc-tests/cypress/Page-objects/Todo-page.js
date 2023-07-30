  export class TodoPage{
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }
    addTodo(Todotext){
        cy.get('.new-todo').type(Todotext + "{enter}")
    }

    validateTodoText(TodoIndex,expectedText){
        cy.get('label').should('have.text', expectedText)
    }

  }