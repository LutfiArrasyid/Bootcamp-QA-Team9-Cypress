import signinPage from "../../../support/pageObject/signinPage"
const signInData = require('../../../fixtures/signInData.json')
import productPage from "../../../support/pageObject/productPage"
import cartPage from "../../../support/pageObject/cartPage"
const cart = require('../../../fixtures/cart.json')


describe('Choose Product Functionality', () => {
    beforeEach(() => {
        cy.visit('')
      })
    it('verify view update cart - cart empty - not login', () => {
      cy.get('.showcart').click()
      cy.get('.subtitle').should('contain.text','You have no items in your shopping cart')
    })

    it('verify view update cart - add cart - not login', () => {
      cy.get(productPage.inptPrd).type(cart["namaProduk"])
      cy.get(productPage.srcBtn).click({force: true})
      cy.get(productPage.prdCart).click({force: true})
      cy.get(productPage.inptClr).click({force: true})
      cy.get(productPage.inptSize).click({force: true})
      cy.get(productPage.inptQty).clear().type(cart["qty"])
      productPage.clickAddCart()
      cy.get(cartPage.shwCart).click({force: true})
      cy.get(':nth-child(7) > .secondary > .action > span').click({force: true})   
    })

    it.only('verify view update cart - update cart - user login', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email).type(signInData["valid-data"]["valid-email"])
      cy.get(signinPage.pwd).type(signInData["valid-data"]["valid-pwd"])
      signinPage.clickSignIn()
      cy.url().should('contain','https://magento.softwaretestingboard.com/')
      cy.get(cartPage.shwCart).click({force: true})
      cy.get(':nth-child(7) > .secondary > .action > span').click({force: true})
      cy.url().should('contain','https://magento.softwaretestingboard.com/checkout/cart/')
      cartPage.clickUpdtShpCart()
    })

    it('verify view update cart - edit cart - user login', () => {
        cy.contains('Sign In').click()
        cy.get(signinPage.email).type(signInData["valid-data"]["valid-email"])
        cy.get(signinPage.pwd).type(signInData["valid-data"]["valid-pwd"])
        signinPage.clickSignIn()
        cy.url().should('contain','https://magento.softwaretestingboard.com/')
        cy.get(cartPage.shwCart).click({force: true})
        cy.get(':nth-child(7) > .secondary > .action > span').click({force: true})
        cy.url().should('contain','https://magento.softwaretestingboard.com/checkout/cart/')
        cy.get(cartPage.editItem).click({force: true})
        cy.get(cartPage.editSize).click({force: true})
        cy.get(cartPage.editClr).click({force: true})
        cartPage.clickUpdtCart()
    })

    it('verify view update cart - delete cart - user login', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email).type(signInData["valid-data"]["valid-email"])
      cy.get(signinPage.pwd).type(signInData["valid-data"]["valid-pwd"])
      signinPage.clickSignIn()
      cy.url().should('contain','https://magento.softwaretestingboard.com/')
      cy.get(cartPage.shwCart).click({force: true})
      cy.get(':nth-child(7) > .secondary > .action > span').click({force: true})
      cy.url().should('contain','https://magento.softwaretestingboard.com/checkout/cart/')
      cy.get(cartPage.deleteBtn).click({force: true})
    
    })

})