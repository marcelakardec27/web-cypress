// Canal WEB, Cypress. Cenário do Test Case 1: Register User.
// Não contém seletor. O e-mail é gerado em cada corrida para não colidir com uma conta já criada.

import { homePage } from '../../pages/home.page'
import { inscricaoPage } from '../../pages/inscricao.page'
import { contaPage } from '../../pages/conta.page'
import { contaCriadaPage } from '../../pages/contaCriada.page'
import { contaEliminadaPage } from '../../pages/contaEliminada.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('registar utilizador', () => {
  it('deve criar a conta, confirmar a sessão e eliminar a conta', () => {
    cy.fixture('utilizador').then((dados) => {
      const email = `qax.${Date.now()}@example.com`

      homePage.visitar()
      homePage.verPaginaInicial()
      homePage.irParaInscricao()

      inscricaoPage.verNovoUtilizador()
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      inscricaoPage.submeter()

      contaPage.verInformacaoDaConta()
      contaPage.preencher({ ...dados, email })
      contaPage.criar()

      contaCriadaPage.verContaCriada()
      contaCriadaPage.continuar()

      homePage.verSessao(dados.nome)
      homePage.eliminarConta()

      contaEliminadaPage.verContaEliminada()
      contaEliminadaPage.continuar()
    })
  })
})
