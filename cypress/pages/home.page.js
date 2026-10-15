// Canal WEB, Cypress. Ações do ecrã inicial.
// Consome homeElements; não repete a string do seletor.

import { homeElements as el } from '../elements/home.elements'

const pedidosDeAnuncio = [
  '**/*doubleclick.net/**',
  '**/*googlesyndication.com/**',
  '**/*googleadservices.com/**',
  '**/*fundingchoicesmessages.google.com/**',
  '**/*adservice.google.com/**',
]

export const homePage = {
  visitar() {
    // O site cobre os cliques com anúncios. Estes pedidos são cortados antes da página abrir.
    pedidosDeAnuncio.forEach((rota) => {
      cy.intercept(rota, { statusCode: 204, body: '' })
    })
    cy.visit('http://automationexercise.com')
  },
  verPaginaInicial() {
    cy.get(el.logotipo).should('be.visible')
  },
  irParaInscricao() {
    cy.get(el.botaoSignupLogin).click()
  },
  verSessao(nome) {
    cy.get(el.indicadorSessao).should('be.visible').and('contain', `Logged in as ${nome}`)
  },
  eliminarConta() {
    cy.get(el.botaoEliminarConta).click()
  },
  terminarSessao() {
    // Sem este clique o caso de login encontrava a sessão já aberta.
    cy.get(el.botaoLogout).click()
  },
}
