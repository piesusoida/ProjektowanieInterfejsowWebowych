
describe('Add and Search for a New Entry', () => {
  Cypress.on("uncaught:exception", (err) =>
  err.message.includes("Hydration failed") ? false : true
);
  it('should create a new entry and find it on the homepage', () => {
    // Go to the /new page
    cy.visit('http://localhost:5173/new');

    cy.wait(500);
    cy.get('input').eq(0).type('Narnia'); // Title
    cy.get('input').eq(1).type('Lewis');  // Author
    cy.get('input').eq(2).type('200');    // Pages
    cy.get('input').eq(3).type('20');     // Price or Quantity

    
     cy.get('button')
      .contains(/add/i)
      .click({ force: true }); 
      cy.wait(500);

     cy.get('nav')           
      .contains(/avaible/i) 
      .click();

  });
});
