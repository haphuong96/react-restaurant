import { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";

const meta = {
  component: StarRating,
  title: "Commons/Components/StarRating",
  argTypes: {
    rating: { control: { type: "number", min: 0, max: 5, step: 0.1 } },
    maxRating: { control: { type: "number", min: 1, max: 5, step: 1 } },
    className: { control: { type: "text" } },
  },
} satisfies Meta<typeof StarRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3,
    maxRating: 5,
  },
};

export const HalfStar: Story = {
  args: {
    rating: 3.5,
    maxRating: 5,
  },
};

export const CustomMax: Story = {
  args: {
    rating: 6,
    maxRating: 7,
  },
};

export const ZeroStar: Story = {
  args: {
    rating: 0,
    maxRating: 5,
  },
};

export const CustomClass: Story = {
  args: {
    rating: 4,
    maxRating: 5,
    className: "p-2",
  },
};
