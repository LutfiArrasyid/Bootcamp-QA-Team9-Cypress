describe('Login Functionality', () => {
  it('Verify Failed Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('[name="password"]').type('standard_user')
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})