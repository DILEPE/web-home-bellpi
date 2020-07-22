  import faker from 'faker'
//require('faker/locale/es')
faker.locale="es"
//Cypress.config('responseTimeout', 120000)
describe("paginas de modelos", () => {
	var name=faker.name.firstName()
	var lastName=faker.name.lastName()
	var phone=faker.random.number({min:3001000000, max:3509999999});
	var email=faker.internet.email();
  it("visitar modelos y llenar formularios", () => {
     cy.visit('https://www.vw-casatoro.co/c/vehiculos')
     cy.get('.contenedor-vehiculos > :nth-child(2) > :nth-child(1)').click()
      cy.url().should('include', '/p/gol/')
      cy.wait(10000);
      cy.get('#inputtext_2').click({force: true})
      cy.get('#inputtext_2').type(name,{force: true})
      cy.get('#inputtext_3').type(lastName,{force:true})
      cy.get('#phone_4').type(phone,{force:true})
      cy.get('#email_5').type(email,{force:true})
     // cy.get('#select_10').select("Villavicencio|39",{force:true})
      cy.get('#select_10')
  .find('option')
  .then(listing => {
    const listingCount = Cypress.$(listing).length;
    expect(listing).to.have.length(listingCount);
    	var aleatorio=randomIntFromInterval(1,listingCount) 
 cy.get('#select_10 > option').eq(aleatorio).invoke('val').then((val)=>{
cy.get('#select_10').select(val)
 });
  });
      cy.get('#para_checkbox_8 > input').check({force:true})
      cy.get('#para_checkbox_9 > input').check({force:true})
      cy.get('#submit_button_1').click({force:true})
      cy.get('#successDiv_1').contains('Tu información ha sido enviada exitosamente')


      })
  })

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}