import { color } from "storybook/internal/theming";
import { createChartCircle } from "./ChartCircle";

export default {
  title: "Component/ChartCircle",
  tags: ["autodocs"],
  argTypes: {
    percentage: { control: "number" },
    bgColor: { control: "color" },
    title: { control: "text" },
  },
};

export const New = {
  args: {
    percentage: 71,
    bgColor: "#41bfda",
    title: "Your Income",
  },
  render: (args) => createChartCircle(args),
};
