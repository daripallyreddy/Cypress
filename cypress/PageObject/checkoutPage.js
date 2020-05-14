class checkoutPage{
    itemPrice(){
        return cy.get('.col-sm-1:nth-child(4) strong')
    }

    totalPrice(){
        return cy.get('.text-right')
    }

    checkoutButton(){
        return cy.get('.btn-success')
    }

    entryCountry(){
        return cy.get('input#country')
    }

    selectCountry(){
        return cy.get('.suggestions ul li a')
    }

    checkBox(){
        return cy.get('.checkbox-primary')
    }

    purchaseButton(){
        return cy.get('[value="Purchase"]')
    }

    successResponse(){
        return cy.get('.alert')
    }
}

export default checkoutPage