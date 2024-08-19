import { ArgTypes } from "@storybook/blocks";
import { createUser } from "./User";

export default {
  title: "Component/User",
  tags: ["autodocs"],
    parameters: {
      layout: "centered",
    },
};

const Template = (args) => {
  return createUser(args);
};

export const Default = Template.bind({});
Default.args = {
  columns: [
    "Name",
    "Read",
    "Update",
    "Create",
    "Delete",
    "Purge",
    "Read Notes",
    "Update Notes",
    "Select/Unselect All",
  ],
};
