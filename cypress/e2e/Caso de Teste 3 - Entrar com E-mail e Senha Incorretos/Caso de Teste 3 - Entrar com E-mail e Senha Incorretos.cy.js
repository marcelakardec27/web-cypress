// Canal WEB, Cypress. Cenário do Caso de Teste 3 - Entrar com E-mail e Senha Incorretos.
// Os comentários numerados seguem a descrição oficial. Não há seletor.
// O e-mail não existe e a senha também está errada.

import { homePage } from '../../pages/home.page'
import { loginPage } from '../../pages/login.page'

// Anúncios de terceiros disparam erros que não fazem parte deste fluxo.
Cypress.on('uncaught:exception', (err) => {
  const mensagem = `${err.message} ${err.stack || ''}`
  if (/google|gstatic|adsbygoogle|doubleclick|Script error/i.test(mensagem)) {
    return false
  }
})

describe('entrar com credenciais incorretas', () => {
  it('deve mostrar o erro quando o e-mail e a senha estão errados', () => {
    const email = `qax.invalido.${Date.now()}@example.com`
    const senha = 'SenhaIncorreta123'

    // 1. O Cypress abre o navegador.
    // 2. Acessa http://automationexercise.com
    homePage.visitar()
    // 3. Verifica que a página inicial está visível
    homePage.verPaginaInicial()
    // 4. Clica em Signup / Login
    homePage.irParaInscricao()
    // 5. Verifica que Login to your account está visível
    loginPage.verLogin()
    // 6. Digita um e-mail e uma senha incorretos
    loginPage.preencher(email, senha)
    // 7. Clica em login
    loginPage.submeter()
    // 8. Verifica o erro Your email or password is incorrect!
    loginPage.verCredenciaisInvalidas()
  })
})
