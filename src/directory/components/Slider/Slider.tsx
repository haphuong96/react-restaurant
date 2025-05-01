import SlickSlider, { Settings } from "react-slick";
import { SliderArrow, SliderArrowProps } from "./SliderArrow";
import { Icon } from "@/commons/components/Icon/Icon";
import "./Slider.style.css";
import { JSX } from "react";

export type SliderProps = {
  children: JSX.Element[];
  prevArrow?: SliderArrowProps;
  nextArrow?: SliderArrowProps;
} & Omit<Settings, "prevArrow" | "nextArrow">;

/**
 * @param children - Array of slides to be displayed in the slider.
 * @param infinite - Whether the slider should loop infinitely.
 * @param arrows - Whether to show navigation arrows.
 * @param dots - Whether to show navigation dots.
 * @param dotsClass - Style dots.
 * @param slidesToShow - Number of slides to show at once.
 * @param slidesToScroll - Number of slides to scroll at once.
 * @param prevArrowProps - Props for the previous arrow component.
 * @param nextArrowProps - Props for the next arrow component.
 * @param className - Additional class names for the slider.
 * @param style - Additional styles for the slider.
 * @returns
 */
export const Slider = ({
  children,
  infinite = true,
  arrows = true,
  dots = false,
  dotsClass = "slider-dots",
  slidesToShow = 1,
  slidesToScroll = 1,
  prevArrow,
  nextArrow,
  ...rest
}: SliderProps) => {
  const prevArrowProps: SliderArrowProps = {
    children: <Icon width={18} name="slider-chevron-left" />,
    customClass: "slider-arrow slider-arrow-prev",
    ...prevArrow,
  };
  const nextArrowProps: SliderArrowProps = {
    children: <Icon width={18} name="slider-chevron-right" />,
    customClass: "slider-arrow slider-arrow-next",
    ...nextArrow,
  };

  return (
    <SlickSlider
      infinite={infinite}
      arrows={arrows}
      dots={dots}
      dotsClass={`slick-dots ${dotsClass}`}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      prevArrow={<SliderArrow {...prevArrowProps} />}
      nextArrow={<SliderArrow {...nextArrowProps} />}
      {...rest}
    >
      {children}
    </SlickSlider>
  );
};
