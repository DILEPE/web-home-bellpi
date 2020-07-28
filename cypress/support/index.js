// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


  import faker from 'faker'
//require('faker/locale/es')

faker.locale="es"
	cy.name=faker.name.firstName()
	cy.lastName=faker.name.lastName()  
    cy.document=faker.random.number({min:500000,max:10999999999})
    cy.kilometer=faker.random.number({min:1000,max:10000})
    cy.phone=faker.random.number({min:3001000000, max:3509999999});
    cy.date_drive=faker.date.future()
    cy.date_drive= Cypress.moment( cy.date_drive).format('YYYY-MM-DD')
	cy.email=faker.internet.email()
	cy.hour=Cypress.moment().format('HH:MM')

	
    
// Alternatively you can use CommonJS syntax:
// require('./commands')
