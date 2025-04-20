import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = {
  component: Slider,
  title: "Directory/Components/Slider",
  argTypes: {
    slidesToShow: { control: { type: "number", min: 1, max: 5 } },
    slidesToScroll: { control: { type: "number", min: 1, max: 5 } },
    infinite: { control: { type: "boolean" } },
    arrows: { control: { type: "boolean" } },
    dots: { control: { type: "boolean" } },
    className: { control: { type: "text" } },
    children: { control: false },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Slide: React.FC<{ slideNumber: number }> = ({ slideNumber }) => (
  <div
    key={1}
    style={{
      background: "teal",
      color: "white",
      padding: 32,
      textAlign: "center",
      fontSize: 24,
      height: "100vh",
    }}
  >
    Slide {slideNumber}
  </div>
);

export const Default: Story = {
  args: {
    dots: true,
    children: [
      <Slide slideNumber={1} />,
      <Slide slideNumber={2} />,
      <Slide slideNumber={3} />,
    ],
  },
};

export const CustomArrows: Story = {
  args: {
    children: [
      <Slide slideNumber={1} />,
      <Slide slideNumber={2} />,
      <Slide slideNumber={3} />,
    ],
    prevArrow: { customStyle: { color: "white" }, children: <span>Prev</span> },
    nextArrow: { customStyle: { color: "white" }, children: <span>Next</span> },
  },
};
