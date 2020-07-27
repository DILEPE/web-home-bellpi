describe("agenda test-drive", () => {
 it(" llenar formulario de test-drive", () => {
 	cy.visit('https://www.vw-casatoro.co/test-drive/')
    cy.get('#inputtext_13').type(cy.name)
    cy.get('#inputtext_14').type(cy.lastName)
    cy.get('#inputtext_12').type(cy.document)
    cy.get('#phone_15').type(cy.phone)
    cy.get('#email_16').type(cy.email)
    cy.get('#date_24').type(cy.date_drive)
    cy.get('#time_25').type(cy.hour,{force:true})
    
    cy.select_dinamico('#select_17')
    cy.select_dinamico('#select_21')
    cy.get('#para_checkbox_19 > input').check({force:true})
    cy.get('#para_checkbox_20 > input').check({force:true})
    cy.get('#submit_button_2').click({force:true})
    cy.get('#successDiv_2').contains('Tu información ha sido enviada exitosamente')

    


  })
})