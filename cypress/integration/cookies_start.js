/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {

    cy
      .visit('/')

  })

  it.only('test #1', () => {

    cy
      .get('[data-cy="login-menu"]')
      .click();

    cy
      .get('[data-cy="login-email"]')
      .type('luis101001@example.com');

    cy
      .get('[data-cy="login-password"]')
      .type('Asdf.1234#');

    cy
      .get('[data-cy="login"]')
      .click();

      if(
      cy.get('[data-cy=logged-user]').should('contains.text', 'luis101001')){
        console.log('SuccessfullTest')
      }
      if(
      cy.getCookie('usser is logged')
      ){console.log('CokkiesFound')}

    });

  
  /*it('test #2', () => {

  });*/

});