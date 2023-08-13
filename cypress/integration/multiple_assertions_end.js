/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/1999453453')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .should( item => {
      if (item.length !== 3) {
        throw new Error('Not enough elements!')
      }
      {console.log('Succesfull Test')

      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
      expect(item[2]).to.contain.text('meat')
    })

})