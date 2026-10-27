// Canal WEB, Cypress. Ações da tela Account Created.
// Consome contaCriadaElements; não repete a string do seletor.

import { contaCriadaElements as el } from '../elements/contaCriada.elements'

export const contaCriadaPage = {
  verContaCriada() {
    // O texto no HTML é "Account Created!". O site mostra ACCOUNT CREATED! com CSS.
    cy.get(el.tituloContaCriada).should('be.visible').and(($titulo) => {
      expect($titulo.text().trim().toUpperCase()).to.eq('ACCOUNT CREATED!')
    })
  },
  continuar() {
    cy.get(el.botaoContinuar).click()
  },
}
