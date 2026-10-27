// Canal WEB, Cypress. Cenário do Caso de Teste 16 - Fazer Encomenda - Entrar antes do Checkout.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// A preparação cria a conta porque o site não mantém um usuário fixo. O cartão é fictício.

import { homePage } from '../../pages/home.page'
import { inscricaoPage } from '../../pages/inscricao.page'
import { contaPage } from '../../pages/conta.page'
import { contaCriadaPage } from '../../pages/contaCriada.page'
import { loginPage } from '../../pages/login.page'
import { carrinhoPage } from '../../pages/carrinho.page'
import { checkoutPage } from '../../pages/checkout.page'
import { pagamentoPage } from '../../pages/pagamento.page'
import { contaEliminadaPage } from '../../pages/contaEliminada.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

const produto = 'Blue Top'
const cartao = {
  numero: '4242424242424242',
  cvc: '311',
  mes: '12',
  ano: '2028',
}

describe('encomendar com login antes do checkout', () => {
  it('deve entrar, pagar a encomenda e eliminar a conta', () => {
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
      // 5. Digita o e-mail e a senha e clica em Login
      loginPage.entrar(email, dados.senha)
      // 6. Verifica Logged in as username no topo
      homePage.verSessao(dados.nome)
      // 7. Adiciona o produto ao carrinho
      homePage.adicionarProduto()
      // 8. Clica em Cart
      homePage.irParaCarrinho()
      // 9. Verifica que a página do carrinho está visível, com o produto
      carrinhoPage.verCarrinho()
      carrinhoPage.verProduto(produto)
      // 10. Clica em Proceed To Checkout
      carrinhoPage.avancarParaCheckout()
      // 11. Verifica Address Details e Review Your Order
      checkoutPage.verMoradaERevisao(dados.primeiroNome, dados.apelido, produto)
      // 12. Escreve o comentário e clica em Place Order
      checkoutPage.comentar('Encomenda de prática')
      checkoutPage.encomendar()
      // 13. Digita Name on Card, Card Number, CVC e Expiration date
      pagamentoPage.preencher({ ...cartao, nome: dados.nome })
      // 14. Clica em Pay and Confirm Order
      // 15. Verifica Your order has been placed successfully! no envio, antes de a página mudar
      pagamentoPage.confirmar()
      // 16. Clica em Delete Account
      homePage.eliminarConta()
      // 17. Verifica ACCOUNT DELETED! e clica em Continue
      contaEliminadaPage.verContaEliminada()
      contaEliminadaPage.continuar()
    })
  })
})