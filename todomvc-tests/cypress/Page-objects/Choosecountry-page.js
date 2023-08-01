export class ChooseCountry{

    selectmycountry(country){
        cy.get('select').select(country)
        cy.get('.chkAgree').click()
        cy.get('button').contains('Proceed').click()
    }
}