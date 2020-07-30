// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
   Cypress.Commands.add("select_dinamico", (id_select) => { 
   cy.get(id_select)
         .find('option')
         .then(listing => {
          const listingCount = Cypress.$(listing).length;
          expect(listing).to.have.length(listingCount);
      	  var aleatorio= 0   
      	  do{

      	  	    aleatorio= randomIntFromInterval(1,listingCount) 
    	         aleatorio=aleatorio-1;
      	   } while (aleatorio== 0 )    

      	   cy.get(id_select+' > option').eq(aleatorio).invoke('val').then((val)=>{
      	   cy.get(id_select).select(val,{force:true})	 
           
       });
     });

     })

     function randomIntFromInterval(min, max) { // min and max included 
     return Math.floor(Math.random() * (max - min + 1) + min);
}
//