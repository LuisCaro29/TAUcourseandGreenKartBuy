export class GKChoose{
    
navigate(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.url().should('eq','https://rahulshettyacademy.com/seleniumPractise/#/')
}

addingtoCart(){
    cy.get(':nth-child(1) > .product-action > button').click()  
}

accesstoCart(){
    cy.get('.cart-icon > img').click()
}

validatingvegetable(){
    cy.get('button').contains('PROCEED TO CHECKOUT').click()
    cy.url().should('eq','https://rahulshettyacademy.com/seleniumPractise/#/cart')
}
}