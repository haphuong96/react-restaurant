import SlickSlider from "react-slick";
import { SliderArrow, SliderArrowProps } from "./SliderArrow";
import "./SliderArrow.style.css";
import { Icon } from "@/commons/components/Icon/Icon";

export type SliderProps = {
  slides: React.ReactNode[];
  infinite?: boolean;
  arrows?: boolean;
  dots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  prevArrowProps?: SliderArrowProps;
  nextArrowProps?: SliderArrowProps;
};

/**
 * To override all styles applied to slider arrows, write your own CSS class for class .slick-prev and .slick-next
 * and import them after the import of this component.
 *
 * @param slides - Array of slides to be displayed in the slider.
 * @param infinite - Whether the slider should loop infinitely.
 * @param arrows - Whether to show navigation arrows.
 * @param dots - Whether to show navigation dots.
 * @param slidesToShow - Number of slides to show at once.
 * @param slidesToScroll - Number of slides to scroll at once.
 * @param prevArrowProps - Props for the previous arrow component.
 * @param nextArrowProps - Props for the next arrow component.
 * @returns
 */
export const Slider = ({
  slides,
  infinite = true,
  arrows = true,
  dots = true,
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
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      prevArrow={
        <SliderArrow
          children={<Icon name="slider-chevron-left" />}
          {...prevArrowProps}
        />
      }
      nextArrow={
        <SliderArrow
          children={<Icon name="slider-chevron-right" />}
          {...nextArrowProps}
        />
      }
    >
      {slides}
    </SlickSlider>
  );
};
