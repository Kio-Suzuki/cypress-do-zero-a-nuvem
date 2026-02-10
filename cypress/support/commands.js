Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName').type('Jonas')
  cy.get('#lastName').type('Silva')
  cy.get('#email').type('jonas@email.com')
  cy.get('#open-text-area').type('Teste de preenchimento de formulário.', { delay: 0 })
  cy.get('button[type="submit"]').click()
})