/// <reference types="Cypress" />

import GoogleElements from "../elements/GoogleElements";
const googleElements = new GoogleElements
const url = Cypress.config("baseUrl")

class codigoGoogle {
    // Comando para acessar o site
    acessarSite() {
        cy.visit(url)
    }

    //Comando para preencher o texto 
    preencheTexto() {
        cy.get(googleElements.inputPesquisa())
        .type('Etec Camargo Aranha')
    }

    //Função para confirmar a pesquisa
    pesquisar() {
        cy.get('form')
        .submit()
    }
}

export default codigoGoogle;