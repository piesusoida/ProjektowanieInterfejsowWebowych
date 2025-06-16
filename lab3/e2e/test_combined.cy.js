describe('Add and Search for a New Entry', () => {
  Cypress.on("uncaught:exception", (err) =>
  err.message.includes("Hydration failed") ? false : true
);
  it('should create a new entry and find it on the homepage', () => {
    // Go to the /new page
    cy.visit('http://localhost:5173');

    cy.wait(500);
    

    // Type "Narnia" into the search input (assumes a search box exists)
    cy.get('input[type="search"], input[placeholder*="Search"]').type('Narnia');

    // // Assert that exactly one result is shown
    cy.get('main.list-vertical > *')  // grab children of main container
      .should('have.length', 1)       // exactly one book
    cy.wait(500);
    cy.get('select#query')  // adjust the selector to your actual filter element
      .select('Author'); 
    cy.get('input[type="search"], input[placeholder*="Search"]').clear().type('Tolkien');
     cy.get('main.list-vertical > *')  // grab children of main container
      .should('have.length', 2)       // exactly one book
      .and('contain.text', 'Tolkien');
    cy.get('nav')           // assumes your navbar is inside a <nav> element
      .contains(/new/i) // change the text to whatever your navbar link says
      .click();
      cy.wait(500);
    cy.get('input').eq(0).type('Narnia'); // Title
    cy.get('input').eq(1).type('Lewis');  // Author
    cy.get('input').eq(2).type('200');    // Pages
    cy.get('input').eq(3).type('20');     // Price

    
     cy.get('button')
      .contains(/add/i)
      .click({ force: true }); 
      cy.wait(500);

     cy.get('nav')           
      .contains(/avaible/i) 
      .click();
    
      cy.get('select#query') 
      .select('pages'); 
      cy.get('input[type="search"], input[placeholder*="Search"]').type('20');

    
    cy.get('main.list-vertical > *')  
      .should('have.length', 2)
      .and('contain.text','Narnia')       // exactly one book
    cy.wait(500);
  });
});