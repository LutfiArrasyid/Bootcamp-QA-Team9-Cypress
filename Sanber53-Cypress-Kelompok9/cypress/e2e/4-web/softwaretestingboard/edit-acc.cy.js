import editAcc from "../../../support/pageObject/editAcc"
const editAccData = require('../../../fixtures/editAccData.json')
const hft = "Nau"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Edit Firstname', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type('Cut')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it.only('Edit Lastname', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.lastName).clear().type('Nai')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Email', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["emailEdit1"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(editAccData["emailEdit2"])
    cy.get(editAcc.currPass).type(editAccData["password"])
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Invalid Email', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(editAccData["invalidEmail"])
    cy.get(editAcc.currPass).type(editAccData["password"])
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.invalidEmailMsg).should('contain.text','Please enter a valid email address.')
  })
  it('Edit Password', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["emailforPass"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.currPass).type(editAccData["password2"])
    cy.get(editAcc.newPass).type(editAccData["password"])
    cy.get(editAcc.conPass).type(editAccData["password"])
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
  it('Edit Weak Password', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.currPass).type(editAccData["password"])
    cy.get(editAcc.newPass).type('amigo')
    cy.get(editAcc.conPass).type('amigo')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.weakPassMsg).should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })
  it('Edit Firstname Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.firstnameNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit Lastname Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.lastName).clear().type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.lastnameNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit Email Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(' ')
    cy.get(editAcc.currPass).type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.emailNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit Password Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.currPass).type(editAccData["password"])
    cy.get(editAcc.newPass).type(' ')
    cy.get(editAcc.conPass).type(' ')
    cy.get(editAcc.passNullMsg).should('contain.text','This is a required field.')
  })
  it('Edit All Null', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["email"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type(' ')
    cy.get(editAcc.lastName).clear().type(' ')
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(' ')
    cy.get(editAcc.currPass).type(' ')
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.newPass).type(' ')
    cy.get(editAcc.conPass).type(' ')
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.nullMsg).should('contain.text','This is a required field.')
  })
  it('Edit All Data', () => {
    cy.contains('Sign In').click()
    cy.get(editAcc.email).type(editAccData["emailEditAll"])
    cy.get(editAcc.password).type(editAccData["password"])
    cy.get(editAcc.loginBtn).click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click({force: true})
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click({force: true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get(editAcc.firstName).clear().type('June')
    cy.get(editAcc.lastName).clear().type('Aera')
    cy.get(editAcc.changeEmailBtn).check()
    cy.get(editAcc.email).clear().type(editAccData["emailEditAll2"])
    cy.get(editAcc.currPass).type(editAccData["password"])
    cy.get(editAcc.changePassBtn).check()
    cy.get(editAcc.newPass).type(editAccData["password"])
    cy.get(editAcc.conPass).type(editAccData["password2"])
    cy.get(editAcc.saveBtn).click()
    cy.get(editAcc.successMsg).should('contain.text','You saved the account information.')
  })
})  
