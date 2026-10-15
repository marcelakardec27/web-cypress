// Canal WEB, Cypress. Ações da secção Login to your account.
// Consome loginElements; não repete a string do seletor.

import { loginElements as el } from '../elements/login.elements'

export const loginPage = {
  verLogin() {
    cy.contains(el.tituloLogin).should('be.visible')
  },
  entrar(email, senha) {
    cy.get(el.campoEmail).clear().type(email)
    cy.get(el.campoSenha).clear().type(senha, { log: false })
    cy.get(el.botaoLogin).click()
  },
  verCredenciaisInvalidas() {
    // A frase só aparece depois de o site recusar o login.
    cy.contains(el.mensagemCredenciaisInvalidas).should('be.visible')
  },
}
