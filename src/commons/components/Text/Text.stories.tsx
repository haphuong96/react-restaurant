import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllTypeScales: Story = {
  render: () => {
    return (
      <>
        <Text typeScale="t2">t2 - Title Heading 2</Text>
        <Text typeScale="ct3">ct3 - Heading 3</Text>
        <Text typeScale="b3">b3 - Body Text</Text>
        <Text typeScale="b3" as="p">
          b3 - Custom Tag &lt;p&gt;
        </Text>
        <Text typeScale="t2" className="text-primary-red underline">
          t2 - With Custom Class
        </Text>
      </>
    );
  },
};
