// Canal WEB, Cypress. O Firefox atual do sistema não abre no Cypress 13.7.
// Esta preparação baixa o Firefox 128 para a pasta do projeto e aponta o nome firefox para ele.
// O Firefox instalado na máquina permanece como está.

const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const versao = '128.14.0esr'
const origem = `https://ftp.mozilla.org/pub/firefox/releases/${versao}`

function diretorio(raiz) {
  return path.join(raiz, 'cypress', 'browsers', 'firefox-128')
}

function executavel(raiz) {
  const base = diretorio(raiz)
  const candidatos = [
    path.join(base, 'core', 'firefox.exe'),
    path.join(base, 'firefox', 'firefox'),
    path.join(base, 'firefox'),
  ]
  return candidatos.find((candidato) => fs.existsSync(candidato)) || null
}

function pedido() {
  const args = process.argv
  const indice = args.findIndex((arg) => arg === '--browser' || arg === '-b')
  if (indice >= 0) return args[indice + 1] || ''
  const junto = args.find((arg) => arg.startsWith('--browser='))
  return junto ? junto.slice('--browser='.length) : ''
}

function executar(comando, args, cwd) {
  const resultado = spawnSync(comando, args, { cwd, stdio: 'inherit' })
  if (resultado.status !== 0) {
    throw new Error(`Não foi possível preparar o Firefox 128 (${comando} ${resultado.status}).`)
  }
}

function baixar(raiz) {
  const destino = diretorio(raiz)
  fs.mkdirSync(destino, { recursive: true })
  if (process.platform === 'win32') {
    const instalador = path.join(destino, 'FirefoxSetup.exe')
    executar('curl.exe', ['-L', '--fail', '-o', instalador, `${origem}/win64/en-US/Firefox%20Setup%20${versao}.exe`])
    executar(instalador, [`/ExtractDir=${destino}`])
    fs.unlinkSync(instalador)
    return
  }
  const pacote = path.join(destino, 'firefox.tar.bz2')
  executar('curl', ['-L', '--fail', '-o', pacote, `${origem}/linux-x86_64/en-US/firefox-${versao}.tar.bz2`])
  executar('tar', ['-xjf', pacote, '-C', destino])
  fs.unlinkSync(pacote)
}

function apontar(config, binario) {
  const navegadores = Array.isArray(config.browsers) ? config.browsers : []
  navegadores.forEach((item) => {
    if (item.name !== 'firefox') return
    item.path = binario
    item.version = '128.14.0'
    item.majorVersion = 128
    item.displayName = 'Firefox'
  })
  return config
}

function prepararFirefox(config) {
  const escolhido = pedido()
  if (escolhido.includes('/') || escolhido.includes('\\')) return config

  const raiz = config.projectRoot
  let binario = executavel(raiz)
  if (!binario) {
    baixar(raiz)
    binario = executavel(raiz)
  }
  if (!binario) {
    throw new Error('O Firefox 128 foi baixado, mas o executável não apareceu.')
  }
  return apontar(config, binario)
}

module.exports = { prepararFirefox }
