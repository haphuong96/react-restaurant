import jumbotron2 from "@/directory/assets/jumbotron2.png";
import "./Jumbotron.style.css";
import { Button } from "@/commons/components/Button/Button";
import { SliderCommonTemplate as Slider } from "@/directory/composites/Slider/CommonTemplate";

export const Jumbotron = () => {
  return (
    <Slider dots>
      <FirstSlide key="1" />
      <SecondSlide key="2" />
    </Slider>
  );
};

const FirstSlide = () => (
  <div className="slide slide-1-bg">
    <div className="absolute left-1/2 -translate-x-1/2 top-1/6 text-white text-center z-10">
      <h2 className="font-merienda text-[40px]">
        Delicious Delights, Shared Moments
      </h2>
      <div className="mt-2.5 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <Button theme="primary" radius={40} className="mt-12 font-bold">
        ORDER NOW
      </Button>
    </div>
  </div>
);

const SecondSlide = () => (
  <div className="slide">
    <img src={jumbotron2} className="w-full h-full object-cover" />
  </div>
);
