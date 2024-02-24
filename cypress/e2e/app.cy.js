describe('Default Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('[data-test-id="sidebar"]').click()
    cy.get('[data-test-id="login-link"]').click()
    cy.url().should('include', '/login')
    cy.get('h1').contains('Log In')

    cy.get('[data-test-id="sidebar"]').click()
    cy.get('[data-test-id="home-link"]').click()
    cy.url().should('include', '/')
    cy.get('h1').contains('Mesas')

    cy.get('[data-test-id="sidebar"]').click()
    cy.get('[data-test-id="orderlist-link"]').click()
    cy.url().should('include', '/order-list')
    cy.get('h1').contains('No permitido')
  })
})
