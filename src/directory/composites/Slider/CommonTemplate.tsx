import { Icon } from "@/commons/components/Icon/Icon";
import { Slider, SliderProps } from "@/directory/components/Slider/Slider";
import "./CommonTemplate.style.css";

export type SliderCommonTemplateProps = Pick<
  SliderProps,
  "children" | "slidesToShow" | "slidesToScroll"
>;

export const SliderCommonTemplate = ({
  children,
  slidesToShow,
  slidesToScroll,
}: SliderCommonTemplateProps) => (
  <Slider
    infinite
    arrows
    dots
    dotsClass="slick-dots slider-dots"
    slidesToScroll={slidesToScroll}
    slidesToShow={slidesToShow}
    nextArrowProps={{
      children: <Icon name="slider-chevron-right" />,
      customClass: "slider-arrow slider-arrow-next",
    }}
    prevArrowProps={{
      children: <Icon name="slider-chevron-left" />,
      customClass: "slider-arrow slider-arrow-prev",
    }}
  >
    {children}
  </Slider>
);
