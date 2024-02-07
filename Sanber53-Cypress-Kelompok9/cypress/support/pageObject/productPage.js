class productPage{
    inptPrd = '.input-text'
    srcBtn = '.action.search'
    inptSize = '#option-label-size-143-item-170'
    inptClr = '#option-label-color-93-item-58'
    inptQty = '#qty'
    menBtn = '.nav-3 > .level-top'
    ctgrBtn = '.categories-menu > :nth-child(2) > :nth-child(2) > a'
    prdDtl = ':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    msg = '.message-success'
    errMsg = '.column > .message > div'
    errClrEpt = '.mage-error'
    errSizeEpt = '.mage-error'

    prdCart = ':nth-child(10) > .product-item-info > .details > .name > .product-item-link'

    clickAddCart(){
        cy.get('#product-addtocart-button').click()
    }

}
export default new productPage()