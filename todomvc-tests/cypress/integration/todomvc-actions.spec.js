/// <reference types ="cypress" />
import { TodoPage } from "../Page-objects/Todo-page"

  describe ('todo actions', () =>{
    const todopage = new TodoPage()
    beforeEach(()  =>{
        todopage.navigate()
        cy.url().should('eq','http://todomvc-app-for-testing.surge.sh/')
       todopage.addTodo('Cleaning Room')
    })


  it(`Should add a new todo  to the list`, ()  => {
   
   todopage.validateTodoText(0,'Cleaning Room')
    cy.get ('.toggle').should('not.be.checked')

  })


  it('Should  mark  a todo as completed', ()  => {

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
  
    
  })


  it('Should  clear completed todos', ()  => {
    cy.get('.toggle').click()
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', ('li'))
    
  })

})