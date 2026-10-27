// Canal WEB, Cypress. Cenário do Caso de Teste 4 - Sair da Conta.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// A preparação cria a conta porque o site não mantém um usuário fixo.

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

describe('sair da conta', () => {
  it('deve terminar a sessão e voltar à página de login', () => {
    cy.fixture('utilizador').then((dados) => {
      const email = `qax.${Date.now()}@example.com`

      // Preparação: cria a conta e encerra a sessão. Os passos oficiais começam no login.
      homePage.visitar()
      homePage.irParaInscricao()
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      inscricaoPage.submeter()
      contaPage.preencher({ ...dados, email })
      contaPage.criar()
      contaCriadaPage.verContaCriada()
      contaCriadaPage.continuar()
      homePage.terminarSessao()

      // 1. O Cypress abre o navegador.
      // 2. Acessa http://automationexercise.com
      homePage.visitar()
      // 3. Verifica que a página inicial está visível
      homePage.verPaginaInicial()
      // 4. Clica em Signup / Login
      homePage.irParaInscricao()
      // 5. Verifica que Login to your account está visível
      loginPage.verLogin()
      // 6. Digita o e-mail e a senha corretos
      loginPage.preencher(email, dados.senha)
      // 7. Clica em login
      loginPage.submeter()
      // 8. Verifica Logged in as username no topo
      homePage.verSessao(dados.nome)
      // 9. Clica em Logout
      homePage.terminarSessao()
      // 10. Verifica que o usuário voltou para a página de login
      cy.url().should('include', '/login')
      loginPage.verLogin()

      // Limpeza: a descrição termina no logout. A conta da preparação é excluída aqui.
      loginPage.entrar(email, dados.senha)
      homePage.eliminarConta()
      contaEliminadaPage.verContaEliminada()
    })
  })
})
