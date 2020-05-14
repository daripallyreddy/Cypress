/// <reference types="cypress" />

import Shop from '../../PageObject/Shop'
import checkoutPage from '../../PageObject/checkoutPage'
describe('Ecomm', function () {

    before(()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice')
    })
    it('Add product to cart', function () {
       const shop = new Shop()
       const checkout = new checkoutPage()
       shop.shopPage().click()
       cy.addItem("iphone X")   
       cy.addItem("Blackberry")
       shop.checkoutButton().click()
       var sum=0
       checkout.itemPrice().each((e1,index)=>{
           var itemPrice=e1.text().split(' ')
           
           sum=Number(sum)+Number(itemPrice[1])

       })
       const totalPrice=checkout.totalPrice().then((e1)=>{
           var totalPrice=e1.text().split(' ')
          expect(sum).to.equal(Number(totalPrice[1]))
       })

       checkout.checkoutButton().click()
       
       checkout.entryCountry().type('India')
       cy.wait(5000)

       checkout.selectCountry().click()
       checkout.checkBox().click()
       checkout.purchaseButton().click()
       checkout.successResponse().then(function(response){
           cy.log(response.text())
       })
    })
})