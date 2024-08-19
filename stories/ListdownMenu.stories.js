import { createListdownMenu } from "./ListdownMenu";

export default {
  title: "Component/ListdownMenu",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
  items: {
    control: "array",
  },
};

export const Default = {
  args: {
    title: "Defualt",
    items: ["Front-End Developer | XYZ Tech Solutions | Jan 2023 - Present"],
  },
  render: (args) => createListdownMenu(args),
};

export const Experience = {
  args: {
    title: "Experience",
    items: [
      "Front-End Developer | XYZ Tech Solutions | Jan 2023 - Present",
      "Junior Web Developer | ABC Digital Agency | Jun 2021 - Dec 2022",
      "Intern Web Developer | Tech Innovators | Jan 2021 - May 2021",
    ],
  },
  render: (args) => createListdownMenu(args),
};

export const Skills = {
  args: {
    title: "Skills",
    items: [
      "Front-End Development",
      "Back-End Development",
      "Tools & Technologies",
      "Soft Skills",
    ],
  },
  render: (args) => createListdownMenu(args),
};

export const Education = {
  args: {
    title: "Education",
    items: [
      "Bachelor of Science in Computer Science | University of Somewhere | 2017 - 2021",
      "JavaScript Algorithms and Data Structures - freeCodeCamp",
      "Responsive Web Design - freeCodeCamp",
      "Certified Web Developer - W3Schools",
    ],
  },
  render: (args) => createListdownMenu(args),
};
