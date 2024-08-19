import "./listdownMenu.css";

export const createListdownMenu = ({ title, items = [] } = {}) => {
  const listdownMenu = document.createElement("div");
  listdownMenu.classList = "listdown-menu";

  const listdownTitle = document.createElement("h2");
  listdownTitle.classList = "listdown-title";
  listdownTitle.textContent = title;

  const listdownUl = document.createElement("ul");

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    // Add click event listener (if needed)
    listItem.addEventListener("click", () => {
      console.log(`${item} clicked`);
    });

    // Append the list item to the <ul>
    listdownUl.appendChild(listItem);
  });

  listdownMenu.appendChild(listdownTitle);
  listdownMenu.appendChild(listdownUl);

  return listdownMenu;
};
