import { Meta, StoryObj } from "@storybook/react";
import { PageLayout } from "./PageLayout";

const meta = {
  component: PageLayout,
  title: "Directory/Components/PageLayout",
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof PageLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: 32, background: "#f9fafb" }}>
        Main content goes here
      </div>
    ),
  },
};
