Feature: Pesquisa Google

    Scenario: Verificar se a pesquisa funciona
        Given acesso ao Google
        When preencho campo de busca
        Then visualizo resultados