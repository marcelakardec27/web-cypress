// Canal WEB, Cypress. Cenário do Caso de Teste 1 - Registar Utilizador.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// O e-mail é gerado a cada execução para não coincidir com uma conta já criada.

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

      // 1. O Cypress abre o navegador.
      // 2. Acessa http://automationexercise.com
      homePage.visitar()
      // 3. Verifica que a página inicial está visível
      homePage.verPaginaInicial()
      // 4. Clica em Signup / Login
      homePage.irParaInscricao()
      // 5. Verifica que New User Signup! está visível
      inscricaoPage.verNovoUtilizador()
      // 6. Digita o nome e o e-mail
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      // 7. Clica em Signup
      inscricaoPage.submeter()
      // 8. Verifica que ENTER ACCOUNT INFORMATION está visível
      contaPage.verInformacaoDaConta()
      // 9. Preenche título, nome, e-mail, senha e data de nascimento
      contaPage.preencherDadosDaConta({ ...dados, email })
      // 10. Marca Sign up for our newsletter!
      contaPage.aceitarNewsletter()
      // 11. Marca Receive special offers from our partners!
      contaPage.aceitarOfertas()
      // 12. Preenche nome, sobrenome, empresa, endereço, país, estado, cidade, CEP e celular
      contaPage.preencherMorada(dados)
      // 13. Clica em Create Account
      contaPage.criar()
      // 14. Verifica que ACCOUNT CREATED! está visível
      contaCriadaPage.verContaCriada()
      // 15. Clica em Continue
      contaCriadaPage.continuar()
      // 16. Verifica Logged in as username no topo
      homePage.verSessao(dados.nome)
      // 17. Clica em Delete Account
      homePage.eliminarConta()
      // 18. Verifica ACCOUNT DELETED! e clica em Continue
      contaEliminadaPage.verContaEliminada()
      contaEliminadaPage.continuar()  
    })
  })
})
