// Canal WEB, Cypress. Spec de CSS tradicional da comparação de login.
// Não há seletor. A conta é criada aqui e o e-mail muda a cada execução.
// O par XPath está em entrarComXpath.cy.js, na mesma pasta.

import { homePage } from '../../pages/home.page'
import { inscricaoPage } from '../../pages/inscricao.page'
import { contaPage } from '../../pages/conta.page'
import { contaCriadaPage } from '../../pages/contaCriada.page'
import { loginComparacaoPage } from './loginComparacao.page'
import { contaEliminadaPage } from '../../pages/contaEliminada.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('entrar na conta com CSS tradicional', () => {
  it('deve entrar com seletor CSS tradicional e eliminar a conta', () => {
    cy.fixture('utilizador').then((dados) => {
      const email = `qax.css.${Date.now()}@example.com`

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

      loginComparacaoPage.verLogin()
      loginComparacaoPage.entrarComCss(email, dados.senha)

      homePage.verSessao(dados.nome)
      homePage.eliminarConta()
      contaEliminadaPage.verContaEliminada()
    })
  })
})
