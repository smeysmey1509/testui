import "./input.css";

export const createInput = ({
  type = "text",
  placeholder = "Search here ...",
  onChange,
}) => {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.classList = "input-field";

  if (onChange) {
    input.addEventListener("input", (event) => {
      onChange(event.target.value);
    });
  }

  return input;
};
