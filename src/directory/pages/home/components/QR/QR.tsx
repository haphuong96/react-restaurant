import { Container } from "@/directory/components/Container/Container";
import MobileImage from "@/directory/assets/mobile.png";
import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import QRImage from "@/directory/assets/qr.png";
import { useI18nContext } from "@/commons/i18n/i18n-react";

export const QR = () => {
  const { LL } = useI18nContext();

  return (
    <Container className="flex">
      <div className="basis-0 grow flex justify-center">
        <img src={MobileImage} />
      </div>
      <div className="basis-0 grow text-center flex flex-col my-8">
        <div className="font-semibold uppercase text-4xl my-4">
          {LL.homepage.qr.available_for()}
        </div>
        <div className="flex gap-3 my-8 justify-center">
          <Button
            variant="primary"
            className="rounded-[40px] uppercase font-bold min-w-44"
            icon={<Icon name="android" />}
          >
            {LL.homepage.qr.android()}
          </Button>
          <Button
            variant="primary"
            className="rounded-[40px] uppercase font-bold min-w-44"
            icon={<Icon name="ios" />}
          >
            {LL.homepage.qr.ios()}
          </Button>
        </div>
        <div className="flex justify-center">
          <img src={QRImage} />
        </div>
      </div>
    </Container>
  );
};
