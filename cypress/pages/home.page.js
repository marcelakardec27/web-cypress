// Canal WEB, Cypress. Ações da tela inicial.
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
    // O site cobre os cliques com anúncios. Essas requisições são bloqueadas antes de a página abrir.
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
  irParaProdutos() {
    cy.get(el.botaoProdutos).click()
  },
  adicionarProduto() {
    cy.get(el.botaoAdicionarProduto).scrollIntoView().click()
    cy.get(el.modalAdicionado).should('be.visible')
  },
  irParaCarrinho() {
    // O diálogo "Added!" cobre o cabeçalho. Ele só é fechado quando está aberto.
    cy.get('body').then(($body) => {
      if ($body.find(`${el.modalAdicionado}.show`).length) {
        cy.get(el.botaoFecharAdicionado).click()
      }
    })
    cy.get(el.botaoCarrinho).click()
  },
  descerAoRodape() {
    cy.get(el.rodape).scrollIntoView()
  },
  verTextoSubscricao() {
    cy.get(el.rodape).contains('h2', el.tituloSubscricao).should('be.visible').and(($titulo) => {
      expect($titulo.text().trim().toUpperCase()).to.eq('SUBSCRIPTION')
    })
  },
  subscrever(email) {
    cy.get(el.campoSubscricao).scrollIntoView().clear().type(email)
    cy.get(el.botaoSubscricao).click()
  },
  verSubscricaoConfirmada() {
    // A frase está sempre no HTML e o site esconde ela depois de 1,5s. A verificação vem logo após o clique.
    cy.get(el.mensagemSubscricao).should('be.visible').and('contain', el.textoSubscricao)
  },
}
