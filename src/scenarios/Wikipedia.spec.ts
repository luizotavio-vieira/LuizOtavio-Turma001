import { test, expect, Page } from '@playwright/test';

test('Realizar uma busca e verificar se os resultados estão corretos', async ({
  page
}: {
  page: Page;
}) => {
  // Acessa a página principal da Wikipedia
  await page.goto('https://www.wikipedia.org/');

  // Seleciona o idioma (por exemplo, português)
  await page.locator('select#searchLanguage').selectOption('pt');

  // Preenche o campo de busca com um termo
  const searchTerm = 'Inteligência artificial';
  await page.fill('input[name="search"]', searchTerm);

  // Clica no botão de pesquisa
  await page.click('button[type="submit"]');

  // Verifica se o título da página de resultados corresponde ao termo buscado
  const pageTitle = await page.title();
  expect(pageTitle).toContain(searchTerm);

  // Verifica se o artigo possui uma seção introdutória
  const content = await page.locator('#mw-content-text').textContent();
  expect(content).toBeTruthy();
});
