// Canal WEB, Cypress. Cenário do Caso de Teste 5 - Registar Utilizador com E-mail Existente.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// A preparação cria o e-mail porque o site não mantém um usuário fixo.

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

      // Preparação: cria a conta com o e-mail que o passo 6 vai repetir e encerra a sessão.
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
      // 5. Verifica que New User Signup! está visível
      inscricaoPage.verNovoUtilizador()
      // 6. Digita o nome e o e-mail já cadastrado
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      // 7. Clica em Signup
      inscricaoPage.submeter()
      // 8. Verifica o erro Email Address already exist!
      inscricaoPage.verEmailExistente()

      // Limpeza: a descrição termina no erro. A conta da preparação é excluída aqui.
      loginPage.entrar(email, dados.senha)
      homePage.eliminarConta()
      contaEliminadaPage.verContaEliminada()
    })
  })
})
