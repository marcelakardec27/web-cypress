// Canal WEB, Cypress. Cenário do Test Case 5: Register User with existing email.
// Não contém seletor. A conta é criada aqui porque o site não guarda um utilizador fixo.
// O e-mail muda em cada corrida e a conta é eliminada no fim.

import { homePage } from '../../pages/home.page'
import { inscricaoPage } from '../../pages/inscricao.page'
import { contaPage } from '../../pages/conta.page'
import { contaCriadaPage } from '../../pages/contaCriada.page'
import { loginPage } from '../../pages/login.page'
import { contaEliminadaPage } from '../../pages/contaEliminada.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('registar com e-mail existente', () => {
  it('deve mostrar o erro quando o e-mail já está registado', () => {
    cy.fixture('utilizador').then((dados) => {
      const email = `qax.${Date.now()}@example.com`

      homePage.visitar()
      homePage.irParaInscricao()
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      inscricaoPage.submeter()
      contaPage.preencher({ ...dados, email })
      contaPage.criar()
      contaCriadaPage.verContaCriada()
      contaCriadaPage.continuar()
      homePage.terminarSessao()

      homePage.visitar()
      homePage.verPaginaInicial()
      homePage.irParaInscricao()

      inscricaoPage.verNovoUtilizador()
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      inscricaoPage.submeter()
      inscricaoPage.verEmailExistente()

      loginPage.entrar(email, dados.senha)
      homePage.eliminarConta()
      contaEliminadaPage.verContaEliminada()
    })
  })
})
