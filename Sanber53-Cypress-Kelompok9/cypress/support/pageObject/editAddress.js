class editAddress{
    email = '#email'
    pw = '#pass'
    signIn_btn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    editAddress_btn = '.box-billing-address > .box-actions > .action > span'
    error = '.message-error > div'
    verifyError(){
        cy.get(this.err).should('be.visible')
    }
    
    clickSignIn(){
        cy.get(this.signIn_btn).click()
    }
}
export default new editAddress()