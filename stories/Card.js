import "./card.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const createCard = ({
  title = "Default Title",
  fontSize = "16px",
  items = [],
} = {}) => {
  // Create the card container
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.style.fontSize = fontSize;
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  // const borderBtn = document.createElement("div");
  // borderBtn.classList.add("border-btn");
  // card.appendChild(borderBtn);

  // Create the list
  const list = document.createElement("ul");
  items.forEach((item) => {
    const listItem = document.createElement("li");

    // Create the icon element
    const cardIcon = document.createElement("span");
    cardIcon.classList.add("card-li-icon");
    cardIcon.innerHTML = item.icon;

    // Create the label element
    const cardLabel = document.createElement("span");
    cardLabel.classList.add("card-li-label");
    cardLabel.textContent = item.label;

    // Append icon and label to the list item
    listItem.appendChild(cardIcon);
    listItem.appendChild(cardLabel);

    // Append list item to the list
    list.appendChild(listItem);
  });

  // Append the list to the card
  card.appendChild(list);

  return card;
};
