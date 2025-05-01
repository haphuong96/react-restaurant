import { Meta, StoryObj } from "@storybook/react";
import MenuItemCard from "./MenuItem";
import sampleImage from "../../assets/jumbotron.png";

const meta = {
  component: MenuItemCard,
  title: "Directory/Composites/MenuItemCard",
  argTypes: {
    name: { control: { type: "text" } },
    price: { control: { type: "number" } },
    currentPrice: { control: { type: "number" } },
    thumbnail: { control: { type: "text" } },
    rating: { control: { type: "number", min: 0, max: 5, step: 0.1 } },
    className: { control: { type: "text" } },
  },
} satisfies Meta<typeof MenuItemCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Classic Burger",
    price: 8.99,
    currentPrice: 7.49,
    thumbnail: sampleImage,
    rating: 4.2,
  },
};

export const NoImage: Story = {
  args: {
    name: "No Image Item",
    price: 5.99,
    currentPrice: 5.99,
    thumbnail: null,
    rating: 3.5,
  },
};

export const Discounted: Story = {
  args: {
    name: "Discounted Pizza",
    price: 12.99,
    currentPrice: 9.99,
    thumbnail: sampleImage,
    rating: 4.8,
  },
};

export const NoDiscount: Story = {
  args: {
    name: "Regular Fries",
    price: 3.99,
    currentPrice: 3.99,
    thumbnail: sampleImage,
    rating: 4.0,
  },
};
