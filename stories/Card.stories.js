import { background, color } from "storybook/internal/theming";
import { createCard } from "./Card";
import { getByLabelText } from "@storybook/test";

export default {
  title: "Component/Card",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    fontSize: { control: "text" },
    items: {
      control: {
        type: "object", // Use "object" to handle array of objects
      },
      description: "Array of items to be displayed in the card",
    },
  },
};

export const Defualt = {
  args: {
    title: "Company",
    fontSize: "16px",
    items: [
      {
        icon: '<i class="fas fa-user"></i>',
        label: "Detail",
      },
      {
        icon: '<i class="fas fa-lock"></i>',
        label: "Team members",
      },
      {
        icon: '<i class="fas fa-shield-alt"></i>',
        label: "Data",
      },
    ],
  },
  render: (args) => createCard(args),
};

export const Personal = {
  args: {
    title: "Personal",
    fontSize: "16px",
    items: [
      {
        icon: '<i class="fas fa-user"></i>',
        label: "Detail",
      },
      {
        icon: '<i class="fas fa-lock"></i>',
        label: "Team members",
      },
      {
        icon: '<i class="fas fa-shield-alt"></i>',
        label: "Format settings",
      },
      {
        icon: '<i class="fa-brands fa-creative-commons"></i>',
        label: "Job boards",
      },
      {
        icon: '<i class="fas fa-shield-alt"></i>',
        label: "Automated messages",
      },
    ],
    fontSize: "",
  },
  render: (args) => createCard(args),
};
