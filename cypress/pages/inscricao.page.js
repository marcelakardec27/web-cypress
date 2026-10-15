// Canal WEB, Cypress. Ações da secção New User Signup.
// Consome inscricaoElements; não repete a string do seletor.

import { inscricaoElements as el } from '../elements/inscricao.elements'

export const inscricaoPage = {
  verNovoUtilizador() {
    cy.contains(el.tituloNovoUtilizador).should('be.visible')
  },
  preencherIdentificacao(nome, email) {
    cy.get(el.campoNome).clear().type(nome)
    cy.get(el.campoEmail).clear().type(email)
  },
  submeter() {
    cy.get(el.botaoSignup).click()
  },
  verEmailExistente() {
    // A frase só aparece depois de o site recusar um e-mail já registado.
    cy.contains(el.mensagemEmailExistente).should('be.visible')
  },
}
