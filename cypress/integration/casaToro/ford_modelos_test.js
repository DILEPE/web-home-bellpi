describe("paginas de modelos", () => {
  it("visitar modelos y llenar formularios", () => {
     cy.visit('https://ford.casatoro.com/modelos');
    /* cy.get(':nth-child(1) > a > .info').trigger('mouseover')
     cy.get(':nth-child(1) > a > .hover > .ver-mas').should('be.visible')
*/
      let idDepartamento=0 
      var aleatorio
      cy.get(':nth-child(1) > a > .info').click({force: true})
      cy.url().should('include', '/modelo/fusion-hybrid')
      cy.wait(25000);
      cy.get('.is-active > a').click({force: true})
      cy.get('#cf_user_names').type('ana')
      cy.get('#cf_user_email').type('ana.mari@gmail.com',{force: true})
      cy.get('#cf_user_phone').type('1234567',{force: true})
     
  	  cy.get('#cf_user_version').select('Fusion Hybrid',{force: true})
  	  cy.get('#cf_user_ciudad').select('Bogota',{force: true}).then(($select)=>{
      idDepartamento=$select.val()
      })
  	  cy.get('#cf_user_dealer').select('Ford Av. 68',{force: true})
  	  cy.get('#cf_user_authorize').check()
  	  cy.get('#cf_user_terms').check()
  	  cy.get('fieldset > .enviar > input').click({force: true})
    // {enter} causes the form to submit
  


    // we should be redirected to /home
 
  })
})  