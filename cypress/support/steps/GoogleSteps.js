/*global Given, Then, When */

import codigoGoogle from "../pageobjects/codigoGoogle";
const codigo = new codigoGoogle

Given("acesso ao Google", () => {
    codigo.acessarSite();
})

When("preencho campo de busca", () => {
    codigo.preencheTexto();
})

Then("visualizo resultados", () => {
    codigo.pesquisar();
})