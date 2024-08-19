import { createProfilePicture } from "./ProfilePicture";

export default {
  title: "Component/ProfilePicture",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
  },
};

export const Defualt = {
  args: {
    src: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
  },
  render: (args) => createProfilePicture(args),
};
