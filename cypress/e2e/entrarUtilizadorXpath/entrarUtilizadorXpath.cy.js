// Canal WEB, Cypress. Cenário XPath do Caso de Teste 2 - Entrar com E-mail e Senha Corretos.
// Não há seletor. O login usa loginXpathPage; o resto do fluxo reutiliza as pages já existentes.
// A conta é criada aqui porque o site não mantém um usuário fixo. O e-mail muda a cada execução.

import { homePage } from '../../pages/home.page'
import { inscricaoPage } from '../../pages/inscricao.page'
import { contaPage } from '../../pages/conta.page'
import { contaCriadaPage } from '../../pages/contaCriada.page'
import { loginXpathPage } from '../../pages/loginXpath.page'
import { contaEliminadaPage } from '../../pages/contaEliminada.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('entrar na conta com XPath', () => {
  it('deve entrar com e-mail e senha corretos pelo XPath e eliminar a conta', () => {
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

      loginXpathPage.verLogin()
      loginXpathPage.entrar(email, dados.senha)

      homePage.verSessao(dados.nome)
      homePage.eliminarConta()

      contaEliminadaPage.verContaEliminada()
    })
  })
})
