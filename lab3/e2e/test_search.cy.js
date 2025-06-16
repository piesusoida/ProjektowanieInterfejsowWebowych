describe('Add and Search for a New Entry', () => {
  Cypress.on("uncaught:exception", (err) =>
  err.message.includes("Hydration failed") ? false : true
);
  it('should create a new entry and find it on the homepage', () => {
    
    cy.visit('http://localhost:5173');

    cy.wait(500);
    

    cy.get('input[type="search"], input[placeholder*="Search"]').type('Narnia');

    cy.get('main.list-vertical > *') 
      .should('have.length', 1)       
    cy.wait(500);
    cy.get('select#query')  
      .select('Author'); 
    cy.get('input[type="search"], input[placeholder*="Search"]').clear().type('Tolkien');
     cy.get('main.list-vertical > *') 
      .should('have.length', 2)      
      .and('contain.text', 'Tolkien');
  });
});
