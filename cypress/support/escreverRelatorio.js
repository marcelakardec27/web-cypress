// Canal WEB, Cypress. Grava o relatório da última execução de cypress run.
// O detalhe é da execução atual. O comparativo no fim guarda a última corrida de cada navegador.

const fs = require('fs')
const path = require('path')

const ordemNavegadores = ['electron', 'chrome']

function duracao(ms) {
  const total = Math.round(Number(ms) || 0)
  const segundos = Math.round(total / 1000)
  const minutos = Math.floor(segundos / 60)
  const resto = segundos % 60
  if (minutos === 0) return `${resto}s`
  return `${minutos} min ${resto}s`
}

function quando(iso) {
  const data = iso ? new Date(iso) : new Date()
  return data.toLocaleString('pt-BR')
}

function escapar(texto) {
  return String(texto || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
}

function nomeVisivel(chave) {
  const nomes = {
    chrome: 'Chrome',
    firefox: 'Firefox',
    edge: 'Edge',
    electron: 'Electron',
  }
  return nomes[chave] || chave
}

function arquivoComparativo(raiz) {
  return path.join(raiz, 'cypress', 'support', 'comparativo-navegadores.json')
}

function lerComparativo(raiz) {
  const arquivo = arquivoComparativo(raiz)
  if (!fs.existsSync(arquivo)) return {}
  try {
    const dados = JSON.parse(fs.readFileSync(arquivo, 'utf8'))
    return dados && typeof dados === 'object' ? dados : {}
  } catch (erro) {
    return {}
  }
}

function ordenar(mapa) {
  return Object.keys(mapa)
    .map((chave) => mapa[chave])
    .sort((a, b) => {
      const posicaoA = ordemNavegadores.indexOf(a.chave)
      const posicaoB = ordemNavegadores.indexOf(b.chave)
      const ordemA = posicaoA === -1 ? ordemNavegadores.length : posicaoA
      const ordemB = posicaoB === -1 ? ordemNavegadores.length : posicaoB
      if (ordemA !== ordemB) return ordemA - ordemB
      return String(a.nome).localeCompare(String(b.nome), 'pt')
    })
}

function juntar(nomes) {
  if (nomes.length <= 1) return nomes[0] || ''
  if (nomes.length === 2) return `${nomes[0]} e ${nomes[1]}`
  return `${nomes.slice(0, -1).join(', ')} e ${nomes[nomes.length - 1]}`
}

function fraseComparativo(lista) {
  if (lista.length === 0) return 'Nenhum navegador entrou no comparativo.'
  if (lista.length === 1) {
    return `Por enquanto só há a execução do ${lista[0].nome}. Ao rodar outro navegador, a linha dele entra nesta tabela.`
  }

  const tempos = lista.map((item) => `${item.nome} levou ${duracao(item.duracaoMs)}`).join(', ')
  const menor = lista.reduce((atual, item) => (item.duracaoMs < atual.duracaoMs ? item : atual))
  const empatados = lista.filter((item) => item.duracaoMs === menor.duracaoMs)
  const velocidade = empatados.length === lista.length
    ? 'As durações ficaram iguais.'
    : empatados.length > 1
      ? `${juntar(empatados.map((item) => item.nome))} tiveram a menor duração.`
      : `${menor.nome} teve a menor duração.`

  const falhas = lista.filter((item) => item.resultado === 'falhou')
  const aprovados = lista.filter((item) => item.resultado !== 'falhou')
  let resultado = 'Todos passaram.'
  if (falhas.length === lista.length) {
    resultado = 'Todos falharam.'
  } else if (falhas.length > 0) {
    const verboFalha = falhas.length > 1 ? 'falharam' : 'falhou'
    const verboOk = aprovados.length > 1 ? 'passaram' : 'passou'
    const artigoFalha = falhas.length === 1 ? 'O ' : ''
    const artigoOk = aprovados.length === 1 ? 'O ' : ''
    resultado = `${artigoFalha}${juntar(falhas.map((item) => item.nome))} ${verboFalha}. ${artigoOk}${juntar(aprovados.map((item) => item.nome))} ${verboOk}.`
  }

  return `${tempos}. ${velocidade} ${resultado}`
}

function escreverRelatorio(results, raiz) {
  const destino = path.join(raiz, 'relatorio.md')
  const corridas = Array.isArray(results && results.runs) ? results.runs : []
  const falhas = []
  const chave = String((results && results.browserName) || 'desconhecido').toLowerCase()
  const comparativo = lerComparativo(raiz)

  comparativo[chave] = {
    chave,
    nome: nomeVisivel(chave),
    versao: String((results && results.browserVersion) || ''),
    sistema: `${(results && results.osName) || ''} ${(results && results.osVersion) || ''}`.trim(),
    inicio: (results && results.startedTestsAt) || new Date().toISOString(),
    fim: (results && results.endedTestsAt) || new Date().toISOString(),
    duracaoMs: Number(results && results.totalDuration) || 0,
    testes: results ? results.totalTests : 0,
    passou: results ? results.totalPassed : 0,
    falhou: results ? results.totalFailed : 0,
    resultado: results && results.totalFailed > 0 ? 'falhou' : 'passou',
  }

  const linhas = [
    '# Relatório de testes',
    '',
    `Atualizado em ${quando(results && results.endedTestsAt)}. O resumo abaixo é desta execução. O comparativo no fim guarda a última corrida de cada navegador.`,
    '',
    '## Resumo',
    '',
    '| | |',
    '|---|---|',
    `| Cypress | ${escapar(results && results.cypressVersion)} |`,
    `| Navegador | ${escapar(results && results.browserName)} ${escapar(results && results.browserVersion)} |`,
    `| Sistema | ${escapar(results && results.osName)} ${escapar(results && results.osVersion)} |`,
    `| Início | ${quando(results && results.startedTestsAt)} |`,
    `| Fim | ${quando(results && results.endedTestsAt)} |`,
    `| Duração | ${duracao(results && results.totalDuration)} |`,
    `| Specs | ${corridas.length} |`,
    `| Testes | ${results ? results.totalTests : 0} |`,
    `| Passou | ${results ? results.totalPassed : 0} |`,
    `| Falhou | ${results ? results.totalFailed : 0} |`,
    `| Pendente | ${results ? results.totalPending : 0} |`,
    `| Ignorado | ${results ? results.totalSkipped : 0} |`,
    '',
    '## Specs',
    '',
    '| Spec | Testes | Passou | Falhou | Duração | Resultado |',
    '|---|---:|---:|---:|---:|---|',
  ]

  corridas.forEach((corrida) => {
    const stats = corrida.stats || {}
    const nome = corrida.spec && (corrida.spec.relative || corrida.spec.name)
    const resultado = stats.failures > 0 ? 'falhou' : 'passou'
    linhas.push(
      `| ${escapar(nome)} | ${stats.tests || 0} | ${stats.passes || 0} | ${stats.failures || 0} | ${duracao(stats.duration)} | ${resultado} |`
    )
    ;(corrida.tests || []).forEach((teste) => {
      if (teste.state === 'failed') {
        const titulo = Array.isArray(teste.title) ? teste.title.join(' > ') : teste.title
        falhas.push({ spec: nome, titulo, erro: teste.displayError })
      }
    })
  })

  linhas.push(
    '',
    '## Cenários',
    '',
    '| Spec | Cenário | Resultado | Duração |',
    '|---|---|---|---:|',
  )

  if (corridas.length === 0) {
    linhas.push('| — | Nenhum spec chegou a rodar. | — | — |')
  }

  corridas.forEach((corrida) => {
    const nome = corrida.spec && (corrida.spec.relative || corrida.spec.name)
    ;(corrida.tests || []).forEach((teste) => {
      const titulo = Array.isArray(teste.title) ? teste.title[teste.title.length - 1] : teste.title
      const estado = teste.state === 'passed' ? 'passou' : teste.state === 'failed' ? 'falhou' : teste.state
      linhas.push(`| ${escapar(nome)} | ${escapar(titulo)} | ${estado} | ${duracao(teste.duration)} |`)
    })
  })

  linhas.push('')

  if (falhas.length > 0) {
    linhas.push('## Falhas', '')
    falhas.forEach((falha) => {
      linhas.push(`### ${falha.spec}`, '', falha.titulo, '', '```', falha.erro || 'Sem detalhe do erro.', '```', '')
    })
  }

  Object.keys(comparativo).forEach((chave) => {
    if (!ordemNavegadores.includes(chave)) delete comparativo[chave]
  })

  const lista = ordenar(comparativo)
  linhas.push(
    '## Comparativo de navegadores',
    '',
    'Cada linha é a última execução daquele navegador. Rodar o mesmo navegador de novo substitui só a linha dele.',
    '',
    fraseComparativo(lista),
    '',
    '| Navegador | Versão | Sistema | Início | Fim | Duração | Testes | Passou | Falhou | Resultado |',
    '|---|---|---|---|---|---:|---:|---:|---:|---|',
  )
  lista.forEach((item) => {
    linhas.push(
      `| ${escapar(item.nome)} | ${escapar(item.versao)} | ${escapar(item.sistema)} | ${quando(item.inicio)} | ${quando(item.fim)} | ${duracao(item.duracaoMs)} | ${item.testes} | ${item.passou} | ${item.falhou} | ${item.resultado} |`
    )
  })
  linhas.push('')

  fs.writeFileSync(arquivoComparativo(raiz), `${JSON.stringify(comparativo, null, 2)}\n`, 'utf8')
  fs.writeFileSync(destino, `${linhas.join('\n')}\n`, 'utf8')
  console.log(`Relatório atualizado em ${destino}`)
}

module.exports = { escreverRelatorio }
