import { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  component: Container,
  title: "Directory/Components/Container",
  argTypes: {
    className: { control: { type: "text" } },
    children: { control: false },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: "#eee" }}>Content inside Container</div>
    ),
  },
};
