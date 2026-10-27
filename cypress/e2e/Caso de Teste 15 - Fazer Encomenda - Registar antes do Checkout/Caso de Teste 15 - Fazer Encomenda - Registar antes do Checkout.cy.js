// Canal WEB, Cypress. Cenário do Caso de Teste 15 - Fazer Encomenda - Registar antes do Checkout.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// O cadastro acontece antes do carrinho. O e-mail muda a cada execução. O cartão é fictício.

import { homePage } from '../../pages/home.page'
import { inscricaoPage } from '../../pages/inscricao.page'
import { contaPage } from '../../pages/conta.page'
import { contaCriadaPage } from '../../pages/contaCriada.page'
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

describe('encomendar com registo antes do checkout', () => {
  it('deve registar a conta, pagar a encomenda e eliminar a conta', () => {
    cy.fixture('utilizador').then((dados) => {
      const email = `qax.${Date.now()}@example.com`

      // 1. O Cypress abre o navegador.
      // 2. Acessa http://automationexercise.com
      homePage.visitar()
      // 3. Verifica que a página inicial está visível
      homePage.verPaginaInicial()
      // 4. Clica em Signup / Login
      homePage.irParaInscricao()
      // 5. Preenche o Signup e cria a conta
      inscricaoPage.verNovoUtilizador()
      inscricaoPage.preencherIdentificacao(dados.nome, email)
      inscricaoPage.submeter()
      contaPage.verInformacaoDaConta()
      contaPage.preencher({ ...dados, email })
      contaPage.criar()
      // 6. Verifica ACCOUNT CREATED! e clica em Continue
      contaCriadaPage.verContaCriada()
      contaCriadaPage.continuar()
      // 7. Verifica Logged in as username no topo
      homePage.verSessao(dados.nome)
      // 8. Adiciona o produto ao carrinho
      homePage.adicionarProduto()
      // 9. Clica em Cart
      homePage.irParaCarrinho()
      // 10. Verifica que a página do carrinho está visível, com o produto
      carrinhoPage.verCarrinho()
      carrinhoPage.verProduto(produto)
      // 11. Clica em Proceed To Checkout
      carrinhoPage.avancarParaCheckout()
      // 12. Verifica Address Details e Review Your Order
      checkoutPage.verMoradaERevisao(dados.primeiroNome, dados.apelido, produto)
      // 13. Escreve o comentário e clica em Place Order
      checkoutPage.comentar('Encomenda de prática')
      checkoutPage.encomendar()
      // 14. Digita Name on Card, Card Number, CVC e Expiration date
      pagamentoPage.preencher({ ...cartao, nome: dados.nome })
      // 15. Clica em Pay and Confirm Order
      // 16. Verifica Your order has been placed successfully! no envio, antes de a página mudar
      pagamentoPage.confirmar()
      // 17. Clica em Delete Account
      homePage.eliminarConta()
      // 18. Verifica ACCOUNT DELETED! e clica em Continue
      contaEliminadaPage.verContaEliminada()
      contaEliminadaPage.continuar()
    })
  })
})
