class signInPage{
    email = '#email'
    pwd = '#pass'
    signIn_btn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    err = '.message-error > div'
    
    verifyError(){
        cy.get(this.err).should('be.visible')
    }
    
    clickSignIn(){
        cy.get(this.signIn_btn).click()
    }
}
export default new signInPage()