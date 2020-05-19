describe('search for names in the profile list', () => {
  it('displays all when input is cleared', () => {
    cy.get('input').type('Tobi').clear()
  })

  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/profiles')
    cy.get('input').type('Tobi').should('have.value', 'Tobi')
  })

  it('displays the correct result', () => {
    cy.visit('/profiles')
    cy.get('input').type('Tobi')
    cy.get('[data-cy=profile_name]').contains('Tobi')
  })
})
