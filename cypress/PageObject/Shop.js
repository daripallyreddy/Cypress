class Shop {
    getTitle() {
        return cy.get(".card-title")
    }

    addButton() {
        return cy.get(".btn-info")
    }

    shopPage(){
        return cy.contains('Shop')
    }

    checkoutButton(){
        return cy.get("a.nav-link.btn.btn-primary")
    }
}

export default Shop;