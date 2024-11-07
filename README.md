# Playwright E2E

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/playwright-e2e/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_playwright-e2e&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_playwright-e2e)

## Getting Started

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 20.x)
1. Run `npm i --save-dev` to install all the project dependencies
1. Run `npx playwright install` to install the browsers used by Playwright
1. Run `npm run ci` to execute the entire test suite
1. Run `npm run show-report` to visualize the reports

All execution artifacts can be found in `./artifacts`, if you want to remove these files run `npm run clean`.

## Project Structure
</br>
<ul>
    <li>Scenarios: Test scenario mapping</li>
    <li>Support: Project structure files
        <ul>
            <li>Elements: Mapping the elements of each screen</li>
            <li>Fixtures: Data configuration files</li>
            <li>Pages: Logic used to perform actions in tests</li>
        </ul>
    </li>
</ul>

Descrição dos testes:
Testes Automatizados E2E (End-to-End) com Playwright
Este projeto contém testes end-to-end automatizados para o site Wikipedia, desenvolvidos com Playwright. Os testes cobrem funcionalidades principais de busca, navegação entre artigos e a verificação do comportamento de links externos. Abaixo, estão descritos os cenários de teste implementados.

1. Cenário de Teste: Realizar uma Busca e Verificar os Resultados
Objetivo: Validar que a busca no site Wikipedia retorna resultados corretos, com base no termo pesquisado.

Ações:
Navega até a página inicial da Wikipedia.
Insere o termo de busca desejado no campo de pesquisa (por exemplo, "Inteligência Artificial").
Submete a busca e verifica se a página de resultados é exibida.
Verificações:
Confirma se o título da página de resultados contém o termo buscado.
Verifica se o artigo possui uma seção de introdução com o conteúdo esperado.
