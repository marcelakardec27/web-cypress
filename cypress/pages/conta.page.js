// Canal WEB, Cypress. Ações da tela Enter Account Information.
// Consome contaElements; não repete a string do seletor.

import { contaElements as el } from '../elements/conta.elements'

export const contaPage = {
  verInformacaoDaConta() {
    cy.contains(el.tituloInformacao).should('be.visible')
  },
  preencherDadosDaConta(dados) {
    cy.get(el.tituloMr).check()
    cy.get(el.campoNome).clear().type(dados.nome)
    // O e-mail chega desabilitado, copiado do cadastro. O valor não é sobrescrito.
    cy.get(el.campoEmail).should('be.disabled').and('have.value', dados.email)
    cy.get(el.campoSenha).type(dados.senha, { log: false })
    cy.get(el.diaNascimento).select(dados.dia)
    cy.get(el.mesNascimento).select(dados.mes)
    cy.get(el.anoNascimento).select(dados.ano)
  },
  aceitarNewsletter() {
    cy.get(el.opcaoNewsletter).check()
  },
  aceitarOfertas() {
    cy.get(el.opcaoOfertas).check()
  },
  preencherMorada(dados) {
    cy.get(el.campoPrimeiroNome).type(dados.primeiroNome)
    cy.get(el.campoApelido).type(dados.apelido)
    cy.get(el.campoEmpresa).type(dados.empresa)
    cy.get(el.campoMorada).type(dados.morada)
    cy.get(el.campoMorada2).type(dados.morada2)
    cy.get(el.campoPais).select(dados.pais)
    cy.get(el.campoEstado).type(dados.estado)
    cy.get(el.campoCidade).type(dados.cidade)
    cy.get(el.campoCodigoPostal).type(dados.codigoPostal)
    cy.get(el.campoTelemovel).type(dados.telemovel)
  },
  preencher(dados) {
    this.preencherDadosDaConta(dados)
    this.aceitarNewsletter()
    this.aceitarOfertas()
    this.preencherMorada(dados)
  },
  criar() {
    cy.get(el.botaoCriarConta).click()
  },
}
