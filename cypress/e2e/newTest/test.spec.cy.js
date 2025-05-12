const users = Cypress.env("USERS")
describe('index.spec.cy.js', () => {
  it('should login as a standard user', () => {
    cy.Login(users["standard"])
   })
  })
  it('should login as a locked out user', () => {
    cy.Login(users["locked"])
     
  })
  it('should login as a problem user', () => {
    cy.Login(users["problem"])
    
  })