// Canal WEB, Cypress. Cenário do Test Case 2: Login User with correct email and password.
// Não contém seletor. A conta é criada aqui porque o site não guarda um utilizador fixo
// e o registo apaga a conta no fim. O e-mail muda em cada corrida.

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

describe('entrar na conta', () => {
  it('deve entrar com e-mail e senha corretos e eliminar a conta', () => {
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

      loginPage.verLogin()
      loginPage.entrar(email, dados.senha)

      homePage.verSessao(dados.nome)
      homePage.eliminarConta()

      contaEliminadaPage.verContaEliminada()
    })
  })
})
