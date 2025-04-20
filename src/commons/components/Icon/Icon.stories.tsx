import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "slider-chevron-left",
        "slider-chevron-right",
        "menu-bag",
        "menu-favorite",
        "menu-phone",
        "menu-user",
        "menu-language",
        "product-rating",
        "menu-bar",
      ],
    },
    width: { control: { type: "number" } },
    height: { control: { type: "number" } },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "menu-user",
  },
};
