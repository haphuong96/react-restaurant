import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

export const OutlineWhite: Story = {
  render: () => (
    <div className="bg-black  h-screen flex justify-center items-center">
      <Button variant="outline-white">Outline White Button</Button>
    </div>
  ),
};
