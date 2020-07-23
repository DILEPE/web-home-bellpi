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
	cy.phone=faker.random.number({min:3001000000, max:3509999999});
	cy.email=faker.internet.email();
    
// Alternatively you can use CommonJS syntax:
// require('./commands')
