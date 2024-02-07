import signinPage from "../../../support/pageObject/signinPage"
const signInData = require('../../../fixtures/signInData.json'
)

describe('Sign in Functionality', () => {
    beforeEach(() => {
      cy.visit('')
    })  
    it.only('Verify Success Login', () => {
        cy.contains('Sign In').click()
        cy.get(signinPage.email).type(signInData["valid-data"]["valid-email"])
        cy.get(signinPage.pwd).type(signInData["valid-data"]["valid-pwd"])
        signinPage.clickSignIn()
    })
    it('Verify Failed Login - User login with invalid email and password', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email).type(signInData["invalid-email"])
      cy.get(signinPage.pwd).type(signInData["invalid-pwd"])
      signinPage.clickSignIn()
      signinPage.verifyError()
    })
    it('Verify Failed Login - User login with invalid email and valid password', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email).type('sanbercode@gmail.com')
      cy.get(signinPage.pwd).type('Sanbercodeteam9')
      signinPage.clickSignIn()
      signinPage.verifyError()
    })
    it('Verify Failed Login - User login with valid email and invalid password', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email).type('sanbercode53@gmail.com')
      cy.get(signinPage.pwd).type('Sanbercodeteam')
      signinPage.clickSignIn()
      signinPage.verifyError()
    })
    it('Verify Failed Login - User login with empty email and password', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email)
      cy.get(signinPage.pwd)
      signinPage.clickSignIn()
      cy.get('.messages > :nth-child(1) > div').should('be.visible')
      cy.get('.messages > :nth-child(2) > div').should('be.visible')
    })
    it('Verify Failed Login - User login with email has fill and password has empty', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email).type('sanbercode53@gmail.com')
      cy.get(signinPage.pwd)
      signinPage.clickSignIn()
      cy.get('.message-error > div').should('be.visible')
    })
    it('Verify Failed Login - User login with email has empty and password has fill', () => {
      cy.contains('Sign In').click()
      cy.get(signinPage.email)
      cy.get(signinPage.pwd).type('Sanbercodeteam9')
      signinPage.clickSignIn()
      cy.get('#email-error').should('be.visible')
    })
})