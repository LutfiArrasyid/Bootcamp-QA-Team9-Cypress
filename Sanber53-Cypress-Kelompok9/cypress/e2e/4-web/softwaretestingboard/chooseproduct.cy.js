import productPage from "../../../support/pageObject/productPage"
const product = require('../../../fixtures/product.json')

describe('Choose Product Functionality', () => {
    beforeEach(() => {
        cy.visit('') 
      })
    it.only('verify choose product use search bar', () => {
      cy.get(productPage.inptPrd).type(product["namaProduk"])
      cy.get(productPage.srcBtn).click()
      cy.get('[href="https://magento.softwaretestingboard.com/typhon-performance-fleece-lined-jacket.html"]').last().click()
      cy.get(productPage.inptSize).click()
      cy.get(productPage.inptClr).click()
      cy.get(productPage.inptQty).clear().type(product["qty"])
      productPage.clickAddCart()
      cy.get(productPage.msg).should('contain.text','You added Typhon Performance Fleece-lined Jacket to your shopping cart.')
    })
    
    it('verify failed choose product use search bar - Invalid keyword', () => {
        cy.get(productPage.inptPrd).type(product["invalidNamaProduk"])
        cy.get(productPage.srcBtn).click()
        cy.get(productPage.errMsg).should('contain.text','Your search returned no results.')
    })

    it('verify choose product on menu', () => {
        cy.get(productPage.menBtn).click()
        cy.get(productPage.ctgrBtn).click()
        cy.get(productPage.prdDtl).click()
        cy.get(productPage.inptSize).click({force: true})
        cy.get(productPage.inptClr).click()
        cy.get(productPage.inptQty).clear().type(product["qty"])
        productPage.clickAddCart()
        cy.get(productPage.msg).should('contain.text','You added Montana Wind Jacket to your shopping cart.') 
    })

    it('verify failed choose product on menu - Invalid Size', () => {
        cy.get(productPage.menBtn).click()
        cy.get(productPage.ctgrBtn).click()
        cy.get(productPage.prdDtl).click()
        cy.get(productPage.inptClr).click()
        cy.get(productPage.inptQty).clear().type(product["qty"])
        productPage.clickAddCart()
        cy.get(productPage.errSizeEpt).should('contain.text','This is a required field.')
    })

    it('verify failed choose product on menu - Invalid color', () => {
        cy.get(productPage.menBtn).click()
        cy.get(productPage.ctgrBtn).click()
        cy.get(productPage.prdDtl).click()
        cy.get(productPage.inptSize).click()
        cy.get(productPage.inptQty).clear().type(product["qty"])
        productPage.clickAddCart()
        cy.get(productPage.errClrEpt).should('contain.text','This is a required field.')
    })

    it('verify failed choose product on menu - Invalid size invalid color', () => {
        cy.get(productPage.menBtn).click()
        cy.get(productPage.ctgrBtn).click()
        cy.get(productPage.prdDtl).click()
        cy.get(productPage.inptQty).clear().type(product["qty"])
        productPage.clickAddCart()
        cy.get(productPage.errSizeEpt).should('contain.text','This is a required field.')
        cy.get(productPage.errClrEpt).should('contain.text','This is a required field.')
    })
          
         
})
