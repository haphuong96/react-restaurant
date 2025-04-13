import { Icon } from "@/commons/components/Icon/Icon";
import { Slider, SliderProps } from "@/directory/components/Slider/Slider";
import "./CommonTemplate.style.css";

export type SliderCommonTemplateProps = Pick<
  SliderProps,
  "children" | "slidesToShow" | "slidesToScroll" | "dots" | "className"
>;

export const SliderCommonTemplate = ({
  children,
  dots = false,
  ...rest
}: SliderCommonTemplateProps) => (
  <Slider
    infinite
    arrows
    dots={dots}
    dotsClass="slick-dots slider-dots"
    nextArrowProps={{
      children: <Icon name="slider-chevron-right" />,
      customClass: "slider-arrow slider-arrow-next",
    }}
    prevArrowProps={{
      children: <Icon name="slider-chevron-left" />,
      customClass: "slider-arrow slider-arrow-prev",
    }}
    {...rest}
  >
    {children}
  </Slider>
);
