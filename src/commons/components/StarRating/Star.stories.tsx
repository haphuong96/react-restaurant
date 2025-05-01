import { Meta, StoryObj } from "@storybook/react";
import { Star } from "./StarRating";

const meta = {
  component: Star,
  title: "Commons/Components/Star",
  argTypes: {
    fillPercentage: { control: { type: "number", min: 0, max: 100, step: 1 } },
    size: { control: { type: "number", min: 8, max: 64, step: 1 } },
    color: { control: { type: "color" } },
    filledColor: { control: { type: "color" } },
  },
} satisfies Meta<typeof Star>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    fillPercentage: 0,
  },
};

export const Half: Story = {
  args: {
    fillPercentage: 50,
  },
};

export const Full: Story = {
  args: {
    fillPercentage: 100,
  },
};

export const CustomSizeAndColor: Story = {
  args: {
    fillPercentage: 100,
    size: 32,
    color: "#00BFFF",
    filledColor: "#EEEEEE",
  },
};
