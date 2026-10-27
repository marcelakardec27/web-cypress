// Canal WEB, Cypress. Ações da seção Login to your account.
// Consome loginElements; não repete a string do seletor.

import { loginElements as el } from '../elements/login.elements'

export const loginPage = {
  verLogin() {
    cy.contains(el.tituloLogin).should('be.visible')
  },
  preencher(email, senha) {
    cy.get(el.campoEmail).clear().type(email)
    cy.get(el.campoSenha).clear().type(senha, { log: false })
  },
  submeter() {
    cy.get(el.botaoLogin).click()
  },
  entrar(email, senha) {
    this.preencher(email, senha)
    this.submeter()
  },
  verCredenciaisInvalidas() {
    // A frase só aparece depois que o site recusa o login.
    cy.contains(el.mensagemCredenciaisInvalidas).should('be.visible')
  },
}
