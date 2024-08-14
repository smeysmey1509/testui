import "./searchProduct.css";

export const createSearchProduct = () => {
  const products = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Cherry" },
    { name: "Date" },
    { name: "Fig" },
    { name: "Grape" },
  ];
  const searchProduct = document.createElement("div");
  searchProduct.classList = "search-product";

  const search = document.createElement("div");

  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.placeholder = "Search products...";
  searchInput.style.outline = "none";
  searchInput.style.border = "none";

  const filterIcon = document.createElement("i");
  filterIcon.classList = "fa-solid fa-filter";

  const list = document.createElement("div");

  const listProduct = document.createElement("ul");
  listProduct.className = "product-list";

  // Iterate over the products and create list items
  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = product.name;
    listProduct.appendChild(listItem);
  });

  searchProduct.append(search);
  search.appendChild(searchInput);
  search.appendChild(filterIcon);
  searchProduct.appendChild(list).appendChild(listProduct);

  return searchProduct;
};
