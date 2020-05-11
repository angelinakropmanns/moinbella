describe('after submit a new profile is created and form is cleared', () => {
  it('the form is cleared after submit', () => {
    cy.visit('/create')

    cy.get('[data-cy=create_profile]')
    cy.get('input[name="name"]').type('Hannah')
    cy.get('input[name="mail"]').type('test@test.com')
    cy.get('input[name="plz"]').type('22222')
    cy.get('input[name="city"]').type('Hamburg')
    cy.get('input[name="gender"]').type('Weiblich')
    cy.get('input[name="breed"]').type('Golden Retriever')
    cy.get('[data-cy=create_profile]').submit()
    cy.get('input[name="name"]').should('have.value', '')
    cy.get('input[name="mail"]').should('have.value', '')
    cy.get('input[name="plz"]').should('have.value', '')
    cy.get('input[name="city"]').should('have.value', '')
    cy.get('input[name="gender"]').should('have.value', '')
    cy.get('input[name="breed"]').should('have.value', '')
  })

  it('a new profile is added', () => {
    cy.visit('/profiles')

    cy.contains('Hannah').should('exist')
  })
})
