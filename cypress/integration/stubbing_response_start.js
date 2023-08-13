/// <reference types="cypress" />


it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => { 
      req.reply((res)=>   {
        res.body[0].starred = true

        return res
      })
    }).as('boarList')

  cy
  .visit('/')
});