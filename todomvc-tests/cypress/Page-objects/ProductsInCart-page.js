export class ProductsInCart{

    applyplaceorder(){
        cy.get('button').contains('Place Order').click()
    }

} 