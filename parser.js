// 1
const articles = [];
const $pageContent = document.querySelectorAll("._content");

$pageContent.forEach((categoryContent) => {
  const products = categoryContent.querySelectorAll("[data-product-mini-card]");
  products.forEach((product) => articles.push(+product.dataset["productMiniCard"]));
});

console.log(articles);

// 2
const details = {};
const $eachDetail = document.querySelectorAll(".tab-pane-product-parameter-item");

$eachDetail.forEach((detail) => {
  const key = detail.querySelector(".parameter-name").childNodes[0].textContent.trim();
  const value = detail.querySelector(".parameter-value").textContent.trim();
  details[key] = value;
});

console.log(details);
