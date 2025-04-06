import SlickSlider from "react-slick";
import { SliderArrow, SliderArrowProps } from "./SliderArrow";

export type SliderProps = {
  children: React.ReactNode[];
  infinite?: boolean;
  arrows?: boolean;
  dots?: boolean;
  dotsClass?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  prevArrowProps?: SliderArrowProps;
  nextArrowProps?: SliderArrowProps;
};

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
 * @returns
 */
export const Slider = ({
  children,
  infinite = true,
  arrows = true,
  dots = true,
  dotsClass = "slick-dots",
  slidesToShow = 1,
  slidesToScroll = 1,
  prevArrowProps,
  nextArrowProps,
}: SliderProps) => {
  return (
    <SlickSlider
      infinite={infinite}
      arrows={arrows}
      dots={dots}
      dotsClass={dotsClass}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      prevArrow={<SliderArrow {...prevArrowProps} />}
      nextArrow={<SliderArrow {...nextArrowProps} />}
    >
      {children}
    </SlickSlider>
  );
};
