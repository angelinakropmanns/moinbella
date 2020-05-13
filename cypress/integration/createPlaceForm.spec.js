describe('after submit a new place is added to the map and the form is cleared', () => {
  it('the form is cleared after submit', () => {
    cy.visit('/create-place')

    cy.get('[data-cy=create_place]')
    cy.get('input[name="name"]').type('Hundeplatz')
    cy.get('input[name="safety"]').type('Nicht eingezäunt')
    cy.get('input[name="lat"]').type('53.5')
    cy.get('input[name="long"]').type('9.9')
    cy.get('input[name="ground"]').type('Sand')
    cy.get('input[name="size"]').type('500')
    cy.get('input[name="public_transport"]').type('Bus')
    cy.get('[data-cy=create_place]').submit()
    cy.get('input[name="name"]').should('have.value', '')
    cy.get('input[name="safety"]').should('have.value', '')
    cy.get('input[name="lat"]').should('have.value', '')
    cy.get('input[name="long"]').should('have.value', '')
    cy.get('input[name="ground"]').should('have.value', '')
    cy.get('input[name="size"]').should('have.value', '')
    cy.get('input[name="public_transport"]').should('have.value', '')
  })

  it('a new place is added', () => {
    cy.visit('/maps')

    cy.contains('Hundeplatz').should('exist')
  })
})
