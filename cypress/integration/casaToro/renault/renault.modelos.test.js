Cypress.config('viewportWidth', 800)
describe("paginas de modelos", () => {
  it("visitar modelos y llenar formularios", () => {
     cy.visit('https://renault.casatoro.com/modelos');
  })  
})
