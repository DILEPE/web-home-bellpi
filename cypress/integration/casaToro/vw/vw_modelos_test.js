describe("paginas de modelos", () => {
  it("visitar modelos y llenar formularios", () => {
     cy.visit('https://www.vw-casatoro.co/c/vehiculos')
     cy.get('.contenedor-vehiculos > :nth-child(2) > :nth-child(1)').click()
      cy.url().should('include', '/p/gol/')
      cy.wait(10000);
      cy.get('#inputtext_2').click({force: true})
      cy.get('#inputtext_2').type(cy.name,{force: true})
      cy.get('#inputtext_3').type(cy.lastName,{force:true})
      cy.get('#phone_4').type(cy.phone,{force:true})
      cy.get('#email_5').type(cy.email,{force:true})
     
      cy.select_dinamico.('#select_17')
      cy.get('#para_checkbox_8 > input').check({force:true})
      cy.get('#para_checkbox_9 > input').check({force:true})
      cy.get('#submit_button_1').click({force:true})
      cy.get('#successDiv_1').contains('Tu información ha sido enviada exitosamente')


      })
  })

