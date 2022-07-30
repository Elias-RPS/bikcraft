//MENU ATIVO

const links = document.querySelectorAll(".header-menu a");

const ativarLink = (link) => {
  const url = location.href; //objeto location contem a string da url da pagina

  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};

links.forEach(ativarLink);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search); //busca parametros

const ativarProduto = (parametro) => {
  const elemento = document.querySelector(`#${parametro}`);
  if (elemento) {
    elemento.checked = true;
  }
};

parametros.forEach(ativarProduto);
