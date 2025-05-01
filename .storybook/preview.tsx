import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { Translation } from "../src/commons/app/context/Translation";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: (Story) => (
    <Translation>
      <Story />
    </Translation>
  ),
};

export default preview;
