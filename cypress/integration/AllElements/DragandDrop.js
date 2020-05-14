/// <reference types="cypress" />



describe("Drag and Drop", function () {
    before(() => {
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
    })
    it("Drag and Drop Using Plugin", function () {
        cy.contains('Draggable 1').drag('#mydropzone')
    })
})