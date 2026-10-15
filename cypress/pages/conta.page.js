// Canal WEB, Cypress. Ações do ecrã Enter Account Information.
// Consome contaElements; não repete a string do seletor.

import { contaElements as el } from '../elements/conta.elements'

export const contaPage = {
  verInformacaoDaConta() {
    cy.contains(el.tituloInformacao).should('be.visible')
  },
  preencher(dados) {
    cy.get(el.tituloMr).check()
    cy.get(el.campoNome).clear().type(dados.nome)
    // O e-mail chega desativado, copiado da inscrição. Não se escreve por cima.
    cy.get(el.campoEmail).should('be.disabled').and('have.value', dados.email)
    cy.get(el.campoSenha).type(dados.senha, { log: false })
    cy.get(el.diaNascimento).select(dados.dia)
    cy.get(el.mesNascimento).select(dados.mes)
    cy.get(el.anoNascimento).select(dados.ano)
    cy.get(el.opcaoNewsletter).check()
    cy.get(el.opcaoOfertas).check()
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
  criar() {
    cy.get(el.botaoCriarConta).click()
  },
}
