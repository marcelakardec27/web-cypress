// Canal WEB, Cypress. Ações da tela Checkout.
// Consome checkoutElements; não repete a string do seletor.

import { checkoutElements as el } from '../elements/checkout.elements'

export const checkoutPage = {
  verMoradaERevisao(nome, apelido, produto) {
    cy.url().should('include', '/checkout')
    cy.contains(el.tituloMorada).should('be.visible')
    cy.get(el.blocoMorada).should('be.visible')
    cy.get(el.moradaEntrega).should('contain', nome).and('contain', apelido)
    cy.contains(el.tituloRevisao).should('be.visible')
    cy.get(el.produtoEncomendado).should('be.visible').and('contain', produto)
  },
  comentar(texto) {
    cy.get(el.campoComentario).scrollIntoView().type(texto)
  },
  encomendar() {
    cy.get(el.botaoEncomendar).click()
  },
}
