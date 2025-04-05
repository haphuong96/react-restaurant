import Slider from "react-slick";
import jumbotron2 from "@/directory/assets/jumbotron2.png";
import "./Jumbotron.style.css";
import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";

export type SlideArrowProps = {
  children?: React.ReactNode;
  className?: string;
  customStyle?: React.CSSProperties;
  onClick?: () => unknown;
};

const Arrow = ({
  children,
  className,
  customStyle,
  onClick,
}: SlideArrowProps) => {
  return (
    <div className={className} style={{ ...customStyle }} onClick={onClick}>
      {children}
    </div>
  );
};

export const Jumbotron = () => {
  return (
    <Slider
      infinite
      arrows
      dots
      slidesToShow={1}
      slidesToScroll={1}
      prevArrow={
        <Arrow>
          <Icon name="slider-chevron-left" />
        </Arrow>
      }
      nextArrow={
        <Arrow>
          <Icon name="slider-chevron-right" />
        </Arrow>
      }
    >
      <div className="slide slide-1-bg">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/6 text-white text-center z-10">
          <h2 className="font-merienda text-[40px]">
            Delicious Delights, Shared Moments
          </h2>
          <div className="mt-2.5 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <Button className="py-2.5 px-9 bg-primary-red mt-12 rounded-[40px] font-bold">
            ORDER NOW
          </Button>
        </div>
      </div>

      <div className="slide">
        <img src={jumbotron2} className="w-full h-full object-cover" />
      </div>
    </Slider>
  );
};
