describe("paginas de retomar modelos", () => {
  it("visitar retomar y llenar formularios", () => {
  	cy.visit('https://www.vw-casatoro.co/retoma/')
  	cy.get('#inputtext_55').type(cy.name)
  	cy.get('#inputtext_56').type(cy.lastName)
  	cy.get('#phone_57').type(cy.phone)


  	cy.select_dinamico('#select_63')
  	cy.get('#email_58').type(cy.email)

  	cy.select_dinamico('#select_59')
  	cy.get('#inputtext_65').type('Volkswagen',{force:true})
  	cy.get('#inputtext_66').type(cy.kilometer,{force:true})
  	cy.get('#para_checkbox_61 > input').check({force:true})
  	cy.get('#para_checkbox_62 > input').check({force:true})
  	cy.get('#submit_button_5').click({force:true})
  	cy.get('#successDiv_5').contains('Tu información ha sido enviada exitosamente ¡Gracias!')
  	

  })
})