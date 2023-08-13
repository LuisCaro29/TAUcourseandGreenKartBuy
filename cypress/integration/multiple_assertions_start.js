/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/1999453453')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')

})