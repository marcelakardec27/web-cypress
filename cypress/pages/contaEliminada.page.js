// Canal WEB, Cypress. Ações do ecrã Account Deleted.
// Consome contaEliminadaElements; não repete a string do seletor.

import { contaEliminadaElements as el } from '../elements/contaEliminada.elements'

export const contaEliminadaPage = {
  verContaEliminada() {
    // O texto no HTML é "Account Deleted!". O site mostra ACCOUNT DELETED! com CSS.
    cy.get(el.tituloContaEliminada).should('be.visible').and(($titulo) => {
      expect($titulo.text().trim().toUpperCase()).to.eq('ACCOUNT DELETED!')
    })
  },
  continuar() {
    cy.get(el.botaoContinuar).click()
  },
}
