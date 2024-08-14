import { color } from "storybook/internal/theming";
import { createBanner } from "./Banner";
import { Defualt } from "./Card.stories";

export default {
  title: "Component/Banner",
  tags: ["autodocs"],
  argTypes: {
    titleHeading: { control: "text" },
    titlePara: { control: "text" },
    fontSize: { control: "text" },
    color: { color: "color" },
  },
};

export const Default = {
  args: {
    titleHeading: "Hello Teat hz",
    titlePara: "hellooooooo",
    fontSize: "17px",
    color: "hsla(184, 29%, 36%, 1)",
  },
  render: (args) => createBanner(args),
};

export const Hiiii = {
  args: {
    titleHeading: "Hello Teat hz",
    titlePara: "aaasd",
    fontSize: "18px",
    color: "hsla(60, 69%, 33%, 1)",
  },
  render: (args) => createBanner(args),
};
