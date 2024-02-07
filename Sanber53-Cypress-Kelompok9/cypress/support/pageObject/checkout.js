class prosescheckout{
    email = '#email'
    pw = '#pass'
    signIn_btn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    verifyError(){
        cy.get(this.err).should('be.visible')
    }
    
    clickSignIn(){
        cy.get(this.signIn_btn).click()
    }
}
export default new prosescheckout()