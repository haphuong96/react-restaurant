import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta = {
  component: Spinner,
  title: "Commons/Components/Spinner",
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    type: {
      control: { type: "select" },
      options: ["border", "grow"],
    },
    color: { control: { type: "color" } },
    fullScreen: { control: { type: "boolean" } },
    text: { control: { type: "text" } },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: "sm" },
};

export const Medium: Story = {
  args: { size: "md" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const ExtraLarge: Story = {
  args: { size: "xl" },
};

export const Grow: Story = {
  args: { type: "grow" },
};

export const CustomColor: Story = {
  args: { color: "#00BFFF" },
};

export const FullScreen: Story = {
  args: { fullScreen: true },
};

export const WithText: Story = {
  args: { text: "Loading..." },
};
