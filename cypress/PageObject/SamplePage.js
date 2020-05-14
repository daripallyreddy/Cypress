class SamplePage{

    radioButton1(){
        return cy.get("input[value='radio1']")
    }
    radioButton2(){
        return cy.get("input[value='radio2']")
    }
    radioButton3(){
        return cy.get("input[value='radio3']")
    }

    dynamicDropDown(){
        return cy.get("#autocomplete")
    }

    dynamicOptions(){
        return cy.get('.ui-menu-item div')
    }

    staticDropDown(){
        return cy.get('#dropdown-class-example')
    }

    staticDropOpotion1(){
        return 'option1'
    }

    staticDropOpotion2(){
        return 'option2'
    }

    staticDropOpotion3(){
        return 'option3'
    }

}
export default SamplePage;