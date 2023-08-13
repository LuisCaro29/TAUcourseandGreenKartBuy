/// <reference types="cypress" />

it('Intercept requests', () => {

  cy 
    .intercept({
     method:'POST',
     URL: '/api/boards'
    }).as('createBoard')

  cy
    .visit('/')
  cy
    .get('[data-cy=create-board]')
    .click()
  cy
    .get('[data-cy=new-board-input]')
    .type('launching a rocket{enter}')

  
  cy 
  .wait('@createBoard')
  .then((board) => {
    expect(board.response.statusCode).to.eq(201)
    expect(board.request.body.name).to.eq('launching a rocket')
  })
});