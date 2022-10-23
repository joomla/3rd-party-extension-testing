// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe('Test DPCalendar', () => {
  beforeEach(() => {
    cy.doAdministratorLogin(Cypress.env('username'), Cypress.env('password'))
  })

  it('checks the DPCalendar Control Panel', function () {
    cy.visit('administrator/index.php?option=com_dpcalendar&view=cpanel')
    cy.checkForPhpNoticesOrWarnings()
    cy.get('h2.dp-heading').contains('Welcome to DPCalendar!').should('exist')
  })
})
