/// <reference types ="cypress" /

import { ChooseCountry } from "../Page-objects/Choosecountry-page"
import { GKChoose } from "../Page-objects/GK-Choosepage"
import { ProductsInCart} from "../Page-objects/ProductsInCart-page"
import { SuccesfullBuy } from "../Page-objects/SuccesfullBuy-page"

describe ('GreenKartVegetablesTest', () =>{
    
    const productsincart = new ProductsInCart()
    const gkchoose = new GKChoose()
    const choosecountry = new ChooseCountry()
    const succesfullbuy = new SuccesfullBuy()
    
    beforeEach(()  =>{
    gkchoose.navigate()
    })

    it(`Buying one kind of vegetable`, ()  => {
        cy.fixture('example.json').then((data) =>{
            const country = data.country;

        gkchoose.addingtoCart()
        gkchoose.accesstoCart()
        gkchoose.validatingvegetable()
        productsincart.applyplaceorder()
        choosecountry.selectmycountry(country);
        succesfullbuy.validationbuysuccessmessage()
})
})
})
