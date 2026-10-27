// Canal WEB, Cypress. Cenário do Caso de Teste 9 - Pesquisar Produto.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// O termo é um nome de produto do catálogo.

import { homePage } from '../../pages/home.page'
import { produtosPage } from '../../pages/produtos.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('pesquisar produto', () => {
  it('deve mostrar os produtos correspondentes à pesquisa', () => {
    const termo = 'Blue Top'

    // 1. O Cypress abre o navegador.
    // 2. Acessa http://automationexercise.com
    homePage.visitar()
    // 3. Verifica que a página inicial está visível
    homePage.verPaginaInicial()
    // 4. Clica em Products
    homePage.irParaProdutos()
    // 5. Verifica a página ALL PRODUCTS
    produtosPage.verTodosOsProdutos()
    // 6. Digita o nome do produto e clica em pesquisar
    produtosPage.pesquisar(termo)
    // 7. Verifica que SEARCHED PRODUCTS está visível
    produtosPage.verTituloPesquisados()
    // 8. Verifica que os produtos relacionados à pesquisa estão visíveis
    produtosPage.verProdutosRelacionados(termo)
  })
})
