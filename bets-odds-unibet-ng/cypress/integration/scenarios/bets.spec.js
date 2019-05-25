/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://www.google.fr')
    })

    it('Ecrire sur le champ de recherche Google', () => {

      cy.log('Taper un message sur le champ de recherche')
      cy.get('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input')
      .type('Hello World')
      cy.log('Cliquer sur le bouton de recherche')
      cy.get('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b')
      .click({force: true})

      // #tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input
    })
})
  