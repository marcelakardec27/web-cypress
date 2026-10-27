const { defineConfig } = require("cypress");
const { escreverRelatorio } = require("./cypress/support/escreverRelatorio");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // No fim de cypress run, substitui relatorio.md na raiz com o resultado desta execução.
      on("after:run", (results) => {
        escreverRelatorio(results, config.projectRoot);
      });
    },
  },
});
