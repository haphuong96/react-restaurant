import Slider from "react-slick";
import jumbotron1 from "../../../../assets/jumbotron.png";
import jumbotron2 from "../../../../assets/jumbotron2.png";
import SliderChevronLeft from "../../../../assets/arrows/slider-chevron-left.svg";
import SliderChevronRight from "../../../../assets/arrows/slider-chevron-right.svg";
import "./Jumbotron.style.css";
import { Text } from "../../../../../commons/components/Text/Text";
import { Button } from "../../../../../commons/components/Button/Button";

export type SlideArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};
const PrevArrow = (props: SlideArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={SliderChevronLeft} className="w-5 h-5 bg-gray-300" />
    </div>
  );
};

const NextArrow = (props: SlideArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10 right-0`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={SliderChevronRight} className="w-5 h-5 bg-gray-300" />
    </div>
  );
};

export const Jumbotron = () => {
  return (
    <div className="relative">
      <Slider
        infinite
        arrows
        dots
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/6 text-white ">
            <Text typeScale="t1" fontWeight="bold">
              Delicious Delights, Shared Moments
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
            <Button className="bg-[#C50533]">ORDER NOW</Button>
          </div>

          <img src={jumbotron1} className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={jumbotron2} className="w-full h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};
