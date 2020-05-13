const testPetName = "Hannah" + Math.floor(Math.random() * Math.floor(10));

describe('after submit a new profile is created and form is cleared', () => {
  it('should form is cleared after submit', () => {
    cy.visit('/create')

    cy.get('[data-cy=create_profile]')
    cy.get('input[name="name"]').type(testPetName)
    cy.get('input[name="mail"]').type('test@test.com')
    cy.get('input[name="plz"]').type('22222')
    cy.get('input[name="city"]').type('Hamburg')
    cy.get('select[name="gender"]').select('Weiblich')
    cy.get('input[name="breed"]').type('Golden Retriever')
    cy.get('[data-cy=create_profile]').submit()
    cy.get('input[name="name"]').should('have.value', '')
    cy.get('input[name="mail"]').should('have.value', '')
    cy.get('input[name="plz"]').should('have.value', '')
    cy.get('input[name="city"]').should('have.value', '')
    cy.get('input[name="breed"]').should('have.value', '')
  })

  it('a new profile is added', () => {
    cy.visit('/profiles')

    cy.contains(testPetName).should('exist')
  })
})
