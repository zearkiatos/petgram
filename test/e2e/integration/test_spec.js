/* global describe, it, cy */

describe('Petgram', () => {
  it('For see its found', () => {
    cy.visit('7')
  })

  it('Navigate to category and should show photos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navigate from navbar to the home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('The users not register see the register form and login when go to favorite', () => {
    cy.visit('/favorite')
    cy.get('form').should('have.length', 2)
  })
})
