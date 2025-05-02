import jumbotron2 from "@/directory/assets/jumbotron2.png";
import "./Jumbotron.style.css";
import { Button } from "@/commons/components/Button/Button";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import { Slider } from "@/directory/components/Slider/Slider";
import { BackgroundOverlay } from "@/directory/components/BackgroundOverlay/BackgroundOverlay";
import slideBg from "@/directory/assets/jumbotron.png";
import { Text } from "@/commons/components/Text/Text";

export const Jumbotron = () => {
  return (
    <Slider dots dotsClass="slider-dots bottom-7">
      <FirstSlide key="1" />
      <SecondSlide key="2" />
    </Slider>
  );
};

const FirstSlide = () => {
  const { LL } = useI18nContext();
  return (
    <BackgroundOverlay backgroundImg={slideBg} className="h-screen">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/6 text-white text-center z-10 flex flex-col items-center w-11/12">
        <h2 className="font-merienda text-base mini-tablet:text-3xl desktop:text-[40px]">
          {LL.homepage.jumbotron.delicious_delights_shared_moments()}
        </h2>
        <div className="mt-2.5 font-medium">
          <Text>{LL.homepage.jumbotron.subtitle()}</Text>
        </div>
        <Button
          variant="primary"
          className="mt-12 font-bold uppercase rounded-[40px]"
        >
          <Text>{LL.homepage.jumbotron.order_now()}</Text>
        </Button>
      </div>
    </BackgroundOverlay>
  );
};

const SecondSlide = () => (
  <div className="slide">
    <img src={jumbotron2} className="w-full h-full object-cover" />
  </div>
);
