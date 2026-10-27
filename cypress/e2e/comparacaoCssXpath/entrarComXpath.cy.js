// Canal WEB, Cypress. Spec XPath da comparação de login.
// Não há seletor. A conta é criada aqui e o e-mail muda a cada execução.
// O par CSS está em entrarComCss.cy.js, na mesma pasta.

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

describe('entrar na conta com XPath', () => {
  it('deve entrar com o mesmo caso adaptado a XPath e eliminar a conta', () => {
    cy.fixture('utilizador').then((dados) => {
      const email = `qax.xpath.${Date.now()}@example.com`

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
      loginComparacaoPage.entrarComXpath(email, dados.senha)

      homePage.verSessao(dados.nome)
      homePage.eliminarConta()
      contaEliminadaPage.verContaEliminada()
    })
  })
})
