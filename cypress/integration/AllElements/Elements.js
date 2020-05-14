/// <reference types="cypress" />

import SamplePage from '../../PageObject/SamplePage'
describe('All Elements in DOM usinng Page Object', function () {
    const page = new SamplePage()
    it('Radio Button', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
       
       page.radioButton1().check().should('be.checked')
       page.radioButton2().check().should('be.checked')
       page.radioButton1().should('not.be.checked')
    })

    it('Dynamic Drop Down', function() {
        page.dynamicDropDown().type('America')
        page.dynamicOptions().each((e1) => {
            if (e1.text().includes('America')) {
                e1.click()
            }
        })
    })

    it('Static Dropdown', function () {
        page.staticDropDown().select(page.staticDropOpotion1()).should('have.value', 'option1')
        page.staticDropDown().select(page.staticDropOpotion2()).should('have.value', 'option2')
        page.staticDropDown().select(page.staticDropOpotion3()).should('have.value', 'option3')

    })

    


})