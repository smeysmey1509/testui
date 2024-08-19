import { fn } from "@storybook/test";
import { createButton } from "./Button";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const primaryButton = await canvas.getByRole("button", { name: /Button/i });

  // Verify the button text is correctait expect(primaryButton).toHaveTextContent("Button");
  await expect(primaryButton).toHaveTextContent("Button");
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Xs = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Delete = {
  args: {
    size: "small",
    label: "Delete",
    backgroundColor: "#f60000",
    color: "#ffffff",
  },
};

export const Update = {
  args: {
    primary: true,
    label: "Update",
    color: "#ffffff",
  },
};

export const Aaa = {
  args: {
    primary: true,
    label: "Button",
    color: "#a62a2a",
    backgroundColor: "#944f4f",
    size: "medium",
  },
};
