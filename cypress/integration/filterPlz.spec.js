describe('search for plz in the profile list', () => {
  it('updates the value of the input if a user types into the input', () => {
    cy.visit('/profiles')
    cy.get('[data-cy=mail_input]').type('angelina.kropmanns@gmail.com')
    cy.get('[data-cy=password_input]').type('testtest')
    cy.get('[data-cy=signin_form]').submit()
    cy.get('input').type('20535').should('have.value', '20535')
  })

  it('displays the correct result', () => {
    cy.visit('/profiles')
    cy.get('input').type('20535')
    cy.get('[data-cy=profile_plz]').contains('20535')
  })

  it('displays all when input is cleared', () => {
    cy.get('input').type('20535').clear()
    cy.get('[data-cy=logout]').click()
  })
})
