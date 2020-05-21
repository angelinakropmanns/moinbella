describe('navigation to another url', () => {
  it('clicking profile icon navigates to a new url', () => {
    cy.visit('/maps')
    cy.get('[data-cy=mail_input]').type('angelina.kropmanns@gmail.com')
    cy.get('[data-cy=password_input]').type('testtest')
    cy.get('[data-cy=signin_form]').submit()
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

    cy.get('[data-cy=userprofile_icon]').click()
    cy.url().should('include', '/user-profile')
    cy.get('[data-cy=logout]').click()
  })
})
