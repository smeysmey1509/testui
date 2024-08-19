import { createProfileName } from "./ProfileName";

export default {
  title: "Component/ProfileName",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    color: { control: "color" },
  },
};

export const Default = {
  args: {
    title: "Hem Raksmey",
    color: "#a51a1a",
  },
  render: (args) => createProfileName(args),
};
