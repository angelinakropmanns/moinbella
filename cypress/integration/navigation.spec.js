describe('navigation to another url', () => {
  it('clicking profile icon navigates to a new url', () => {
    cy.visit('/maps')

    cy.get('[data-cy=profile_icon]').click()
    cy.url().should('include', '/profiles')
  })

  it('clicking maps icon navigates to a new url', () => {
    cy.visit('/profiles')

    cy.get('[data-cy=maps_icon]').click()
    cy.url().should('include', '/maps')
  })

  it('clicking create icon navigates to a new url', () => {
    cy.visit('/profiles')

    cy.get('[data-cy=create_icon]').click()
    cy.url().should('include', '/create')
  })
})
