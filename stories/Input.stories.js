import { createInput } from "./Input";

export default {
  title: "Input",
  // parameters: {
  //   layout: "centered",
  // },
};

const Template = (args) => {
  const input = createInput(args);
  document.body.appendChild(input);
  return input;
};

export const Defualt = Template.bind({});
Defualt.args = {
  placeholder: "Search here ...",
  onChange: (value) => {
    console.log("Input value", value);
  },
};
