class registerPage{
    name1 = '#firstname'
    name2 = '#lastname'
    email = '#email_address'
    pwd = '#password'
    pwd_confirm = '#password-confirmation'
    register_btn = '#form-validate > .actions-toolbar > div.primary > .action'
    err = '#password-error'
    
    verifyError(){
        cy.get(this.err).should('be.visible')
    }
    
    clickRegister(){
        cy.get(this.register_btn).click()
    }
}
export default new registerPage()