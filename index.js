/**
 * GET - Buscar
 * POST - Enviar
 * DELETE - Deletar
 * PATCH - Substituir parcialmente
 * PUT - Substituir completamente
 * 
 * Códigos HTTP
 * 100 ~ 199 - Informativa
 * 200 ~ 299 - Bem sucedida
 * 300 ~ 399 - Redirecionamento
 * 400 ~ 499 - Erro do cliente
 * 500 ~ 599 - Erro do servidor
 */

// Sincrona inicializar a variável primeiro...
// Faz Requisição de uma API Fetch ()
// de cima para baixo
// Variávela após Not

//Programacao Síncrona - *** //

// const nome = "Miriam";
// const saudacao = `Olá, meu nome é ${nome}!`;
// console.log(nome);
// const result = fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => json);
// console.log(result);
// console.log(saudacao);

/**
 * Criar uma função que ao clicar no btnList
 * ela vai renderizar (mostrar) a lista de produtos dentro da UL
 * Mostrar apenas o NOME do produto.
 * Funções exemplo: renderDataTable e createTableBodyRow
 */

// Assíncrona - 

const list = document.getElementById("list");
const btnList = document.getElementById("btn-list");


async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}

getProducts();

function createListItem(nome) {
  const html = (list.innerHTML += `
  <li>${nome}<li>
  `);
  return html;
}

async function renderList() {
  const products = await getProducts();
  list.innerHTML = "";
  products.map((product) => {
    const data = createListItem(product.title);
    return data;
  });
}

btnList.addEventListener ("click", renderList);
