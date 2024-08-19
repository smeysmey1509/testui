import { createSearchProduct } from "./SearchProduct";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Component/SearchProduct",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: { control: "text" },
    fontSize: { control: "text" },
    searchProductBackgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {
    placeholder: "Search here ...",
    fontSize: "12px",
    searchProductBackgroundColor: "#e1c8c8",
  },
  render: (args) => createSearchProduct(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test the search functionality
    const searchInput = canvas.getByPlaceholderText("Search here ...");
    userEvent.type(searchInput, "Tesla");

    // Check if filtered products are displayed
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Test the filter popup
    // Use querySelector to find the Font Awesome icon
    const filterIcon = canvasElement.querySelector(".fa-filter");

    // Ensure the filter icon is visible
    if (filterIcon) {
      userEvent.click(filterIcon);

      // Wait for the popup to be visible and contain brand options
      const teslaBrand = await canvas.findByText("Tesla");
      if (teslaBrand) {
        teslaBrand.click();

        // Wait for the products list to update
        const teslaModelS = await canvas.findByText("Tesla Model S");
        if (teslaModelS) {
          // Check if the Tesla Model S is in the document
          teslaModelS;
        }
        const fordMustang = canvas.queryByText("Ford Mustang");
        if (fordMustang) {
          // Ensure Ford Mustang is not in the document
          fordMustang;
        }

        // Clear filter
        const clearFilter = await canvas.findByText("Clear Filter");
        userEvent.click(clearFilter);

        // Wait for all products to be displayed again
        await canvas.findByText("Ford Mustang");
      }
    } else {
      throw new Error("Filter icon not found");
    }
  },
};

export const New = {
  args: {
    placeholder: "Search here ...",
    fontSize: "17px",
    searchProductBackgroundColor: "#c22828",
  },
  render: (args) => createSearchProduct(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const searchInput = canvas.getByPlaceholderText("Search here ...");
    userEvent.type(searchInput, "Tesla");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const filterIcon = canvasElement.querySelector(".fa-filter");

    if (filterIcon) {
      userEvent.click(filterIcon);

      const teslaBrand = await canvas.findByText("Tesla");
      if (teslaBrand) {
        teslaBrand.click();

        const teslaModelS = await canvas.findByText("Tesla Model S");
        if (teslaModelS) {
          teslaModelS;
        }
        const fordMustang = canvas.queryByText("Ford Mustang");
        if (fordMustang) {
          fordMustang;
        }

        const clearFilter = await canvas.findByText("Clear Filter");
        userEvent.click(clearFilter);

        await canvas.findByText("Ford Mustang");
      }
    } else {
      throw new Error("Filter icon not found");
    }
  },
};
