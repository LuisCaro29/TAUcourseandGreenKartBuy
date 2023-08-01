/// <reference types="cypress" /

describe('filtering', () => {
 beforeEach(()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type("Clean Room{enter}")
    cy.get('.new-todo').type("Learn JavaScript{enter}")
    cy.get('.new-todo').type("Use Cypress{enter}")
 
    cy.get('.todo-list li:nth-child(2) .toggle').click()
})

 it('Should filter "Active"todos list', ()  => {
    cy.get(':nth-child(2) > a').click()
    cy.get('.todo-list li').should ('have.length', 2)
})

it('Should filter "Completed"todos list', ()  => {
    cy.contains('Completed').click()
    cy.get('.todo-list li').should ('have.length', 1)
})
it('Should filter "All"todos list', ()  => {
    cy.contains('All').click()
    cy.get('.todo-list li').should ('have.length', 3)
})
})

//https://rahulshettyacademy.com/angularpractice/shop