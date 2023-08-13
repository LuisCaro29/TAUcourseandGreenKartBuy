/// <reference types="cypress" />

import { realHover } from "cypress-real-events/commands/realHover";

it('Installing plugins', () => {

  cy
    .visit('/');

 /* 
 //U can realize drag abd drop with a pluggin and apply a alias to the variable
 cy 
    .get('[data-cy=task]')
    .eq(0)
    .as('task2')

    cy 
    .get('[data-cy=task]')
    .eq(1)
    .as('task1')
  
    cy 
    .get('[data-cy=task]')
    .eq(0)
    .drag('@task1')

    cy
      .get('[data-cy=task]')
      .eq(1)
      .drag('[data-id="53991852473"] > [data-cy=new-task]')
    
// U can attach one file using a pluggin cypress-file-upload 
    cy
      .get('[data-cy=task]')
      .eq(0)
      .click()

    cy
      .get('.dropzone')
      .attachFile('logo.png',{ subjectType: 'drag-n-drop' });

  // Practicing

  cy 
    .get('[data-cy=board-item]')
    .eq(0) 
    .click()  
    .get('.Nav_boards')
    .click()
  
    cy
    .get('[data-cy=board-item]')
    .eq(1) 
    .click()  
    .get('.Nav_boards')
    .click()*/
   cy
    .get('[data-cy=board-item]')
    .realHover()
    .should('have.css' , 'background-color' , 'rgb(5, 90, 140)')
      });