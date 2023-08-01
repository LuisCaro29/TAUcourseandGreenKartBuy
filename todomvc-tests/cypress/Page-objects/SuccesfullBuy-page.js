export class SuccesfullBuy{
    validationbuysuccessmessage(){
        cy.contains('Home').url().should('eq','https://rahulshettyacademy.com/seleniumPractise/#/country')
        }

}