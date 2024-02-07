import registerPage from "../../../support/pageObject/registerPage"

describe('Register Functionality', () => {
  beforeEach(() => {
    cy.visit('')
  })
    it('Verify Success Register - User create new user with valid name, email, and password', () => {
      cy.contains('Create an Account').click()
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53123@gmail.com')
      cy.get(registerPage.pwd).type('Sanbercodeteam9')
      cy.get(registerPage.pwd_confirm).type('Sanbercodeteam9')
      registerPage.clickRegister()
      cy.get('.message-success > div').should('contain.text','Thank you for registering with Main Website Store.')
    })
    it('Verify Failed Regist - User create new user with valid name, invalid email, and valid password', () => {
      cy.contains('Create an Account').click()
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercodeteam9')
      cy.get(registerPage.pwd).type('Sanbercodeteam9')
      cy.get(registerPage.pwd_confirm).type('Sanbercodeteam9')
      registerPage.clickRegister()
      cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Verify Failed Regist - Email already registered', () => {
      cy.contains('Create an Account').click()
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercodeteam9@gmail.com')
      cy.get(registerPage.pwd).type('Sanbercodeteam9')
      cy.get(registerPage.pwd_confirm).type('Sanbercodeteam9')
      registerPage.clickRegister()
      cy.get('.message-error > div').should('contain.text','There is already an account with this email address. If you are sure that it is your email address,')
    })
    it('Verify Failed Regist - Password not unique', () => {
      cy.contains('Create an Account').click()
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53team9@gmail.com')
      cy.get(registerPage.pwd).type('sanbercode')
      cy.get(registerPage.pwd_confirm).type('sanbercode')
      registerPage.clickRegister()
      registerPage.verifyError()
    })
    it('Verify Failed Regist - Password weak & less than 8 character', () => {
      cy.contains('Create an Account').click()
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53team9@gmail.com')
      cy.get(registerPage.pwd).type('san')
      cy.get(registerPage.pwd_confirm).type('san')
      registerPage.clickRegister()
      registerPage.verifyError()
    })
    it('Verify Failed Regist - Password confirmation not match', () => {
      cy.contains('Create an Account').click()
      cy.get(registerPage.name1).type('Sanbercode53')
      cy.get(registerPage.name2).type('Kelompok9')
      cy.get(registerPage.email).type('sanbercode53team9@gmail.com')
      cy.get(registerPage.pwd).type('Sanbercode9')
      cy.get(registerPage.pwd_confirm).type('Sanbercode')
      registerPage.clickRegister()
      cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again.')
    })
  })