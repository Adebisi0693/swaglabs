const users = Cypress.env("USERS")
describe('index.spec.cy.js', () => {
  it('should login as a performance glitch user', () => {
    cy.Login(users["glitch"])
  
  })
    it('should login as a error user', () => {
      cy.Login(users["error"])
   
  })
    it('should login as a visual user', () => {
      cy.Login(users["visual"])
  
  })
})