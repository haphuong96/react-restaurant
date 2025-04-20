import { Meta, StoryObj } from "@storybook/react";
import { Star } from "./StarRating";

const meta = {
  component: Star,
  title: "Commons/Components/Star",
  argTypes: {
    id: { control: { type: "number", min: 0, max: 10 } },
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
    id: 0,
    fillPercentage: 0,
  },
};

export const Half: Story = {
  args: {
    id: 1,
    fillPercentage: 50,
  },
};

export const Full: Story = {
  args: {
    id: 2,
    fillPercentage: 100,
  },
};

export const CustomSizeAndColor: Story = {
  args: {
    id: 3,
    fillPercentage: 100,
    size: 32,
    color: "#00BFFF",
    filledColor: "#EEEEEE",
  },
};
