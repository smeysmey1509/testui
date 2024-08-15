import "./input.css";

export const createInput = ({
  type = "text",
  placeholder = "Search here ...",
  onChange,
}) => {

  const searchInput = document.createElement('div')
  searchInput.classList = 'searchInput'

  const searchIcon = document.createElement('i')
  searchIcon.classList = 'fa-solid fa-magnifying-glass'

  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.classList = "input-field";

  if (onChange) {
    input.addEventListener("input", (event) => {
      onChange(event.target.value);
    });
  }

  searchInput.appendChild(searchIcon)
  searchInput.appendChild(input)

  return searchInput;
};
