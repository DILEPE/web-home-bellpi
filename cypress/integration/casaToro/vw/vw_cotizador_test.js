describe("cotizar un modelos", () => {
 it(" llenar formularios de cotizacion", () => {
     cy.visit('https://www.vw-casatoro.co/cotizador/')
     cy.get('#inputtext_2').type(cy.name)
     cy.get('#inputtext_3').type(cy.lastName)
     cy.get('#phone_4').type(cy.phone)
     cy.get('#email_5').type(cy.email)
     cy.select_dinamico('#select_6')
     cy.select_dinamico('#select_10')
     cy.get('#para_checkbox_8 > input').check({force:true})
     cy.get('#para_checkbox_9 > input').check({force:true})
     cy.get('#submit_button_1').click({force:true})
     cy.get('#successDiv_1').contains('Tu información ha sido enviada exitosamente')
     
 })
})