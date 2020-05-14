/// <reference types="cypress" />

before(()=>{
    cy.visit('https://example.cypress.io/commands/network-requests')
})

beforeEach(() => {
    
    cy.server()
})

describe('Stubbing DOM by using XHR', function () {

    it('Update XHR', function () {

        cy.route({
            method: 'PUT',
            url: '/comments/*',
            status: 404,
            response: { error: "Failed to update due to server down" }
        }).as('UpdateComment')

        cy.get('.network-put').click()

        cy.wait('@UpdateComment')

        cy.get('.network-put-comment').should('contain', "Failed to update")
    })

    it('Post XHR', function () {

        cy.route({
            method: 'POST',
            url: '/comments',
            status: 402,
            response: { error: "Failed to update" }
        }).as('PostComment')

        cy.get('.network-post').click()
        cy.wait('@PostComment')


        cy.get('@PostComment').should((xhr) => {
            expect(xhr.requestBody).to.include('email')
            expect(xhr.requestHeaders).to.have.property('Content-Type')
            expect(xhr.responseBody).to.have.property('error', "Failed to update")
        })
    })

    it('Get XHR', function () {

        cy.route({
            method: 'GET',
            url: '/comments/*',
            status: 404,
            response: { error: "Error in getting the message" }
        }).as('GetComment')

        cy.get('.network-btn').click()

        cy.wait('@GetComment')

        cy.get('@GetComment').should((xhr) => {
            expect(xhr.responseBody).to.have.property('error', "Error in getting the message")
        })

    })


})
