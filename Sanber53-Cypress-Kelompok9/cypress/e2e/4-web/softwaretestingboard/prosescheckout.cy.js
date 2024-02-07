import checkout from "../../../support/pageObject/checkout"
const checkoutdata = require('../../../fixtures/checkoutdata.json')

describe('proses to checkout', () => {
    beforeEach(() => {
      cy.visit('')
    })  

    it('Success checkout', () => {
        cy.contains('Sign In').click()
        cy.get(checkout.email).type(checkoutdata["email"])
        cy.get(checkout.pw).type(checkoutdata["pw"])
        checkout.clickSignIn()
        cy.get('.minicart-wrapper > .action').click({force: true})
        cy.get('.showcart').click({force: true})
        cy.get('.methods > :nth-child(1) > .action > span').eq(0).click()
        cy.get(':nth-child(1) > :nth-child(1) > .radio', {timeout: 10000}).click({force: true})
        cy.get('.button > span').click({force: true})
    })
    it('Success checkout', () => {
      cy.contains('Sign In').click()
      cy.get(checkout.email).type(checkoutdata["email"])
      cy.get(checkout.pw).type(checkoutdata["pw"])
      checkout.clickSignIn()
      cy.get('.minicart-wrapper > .action').click({force: true})
      cy.get('.showcart').click({force: true})
      cy.get('.methods > :nth-child(1) > .action > span').eq(0).click()
      cy.get(':nth-child(2) > :nth-child(1) > .radio', {timeout: 10000}).click({force: true})
      cy.get('.button > span').click({force: true})
  })
})