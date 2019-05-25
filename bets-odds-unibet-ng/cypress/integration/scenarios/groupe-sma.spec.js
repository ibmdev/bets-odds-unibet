/// <reference types="Cypress" />

context('Actions', () => {

    var urlSocietaire = Cypress.env('urlSocietaire')
    var canal = Cypress.env('canal')
    var domaine = Cypress.env('domaine')
    var univers = Cypress.env('univers')
    var urlBetsApplication = Cypress.env('urlBetsApplication')

    beforeEach(() => {})

    it('Test Application Bets', () => {
      cy.visit(urlBetsApplication)
    })

    /**
    it('Test Service en ligne', () => {

      cy.visit(urlSocietaire +'?domaine=IARD&univers=ENT&canal=DIRECT')

      cy.log('Canal ' + canal)
      cy.log('Domaine ' + domaine)
      cy.log('Univers ' + univers)

      cy.get('#locataire').type('123456789')
      cy.get('#seuilForm > section:nth-child(1) > div > div.col-md-5.col-md-height.bg-boat > div > div.clearfix.form-line.login-form__remember-field > label > span')
      .click()
      cy.get('#seuilForm > section.row.form-actions-btns.hidden-md.hidden-lg > div > input')
      .click()
      cy.get('#error_poigneeBiometrique_calculator_poignee')
      .should((elem) => {
        assert.equal(elem.text(), 'Le champ code secret est obligatoire.', 'Message egale')
      });
      cy.get('body > main > div > div.error-header')
      .should((elem) => {
        assert.equal(elem.text(), 'Merci de bien vouloir corriger/compléter les champs signalés en rouge', 'Message egale')
      });
   })
   **/
})
  