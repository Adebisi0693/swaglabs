describe('index.spec.cy.js', () => {
  it('should login as a standard user', () => {
   cy.fixture('elements').then((el)=>{
    cy.Login(el.standard)
   })
  })
  it('should login as a locked out user', () => {
    cy.fixture('elements').then((el)=>{
      cy.Login(el.locked)
     })
  })
  it('should login as a problem user', () => {
    cy.fixture('elements').then((el)=>{
      cy.Login(el.problem)
     })
  })
  it('should login as a performance glitch user', () => {
    cy.fixture('elements').then((el)=>{
      cy.Login(el.glitch)
    })
  })
    it('should login as a error user', () => {
      cy.fixture('elements').then((el)=>{
      cy.Login(el.error)
    })
  })
    it('should login as a visual user', () => {
      cy.fixture('elements').then((el)=>{
        cy.Login(el.visual)
      })
    })
  })