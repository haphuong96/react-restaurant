import { Container } from "@/directory/components/Container/Container";
import MobileImage from "@/directory/assets/mobile.png";
import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import QRImage from "@/directory/assets/qr.png";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import "./QR.style.css";
import { Text } from "@/commons/components/Text/Text";

export const QR = () => {
  const { LL } = useI18nContext();

  return (
    <Container className="container-layout text-center py-2.5">
      <div className="img-container flex justify-center">
        <img src={MobileImage} />
      </div>
      <div className="header font-semibold uppercase text-xl mini-tablet:text-2xl tablet:text-3xl desktop:text-4xl flex justify-center items-center">
        {LL.homepage.qr.available_for()}
      </div>
      <div className="btn-container">
        <div>
          <Button
            variant="primary"
            className="rounded-[40px] uppercase font-bold"
            icon={
              <Icon
                name="android"
                className="w-4 h-4 desktop:w-6 desktop:h-6"
              />
            }
            fullWidth
          >
            <Text>{LL.homepage.qr.android()}</Text>
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            className="rounded-[40px] uppercase font-bold py"
            icon={
              <Icon name="ios" className="w-4 h-4 desktop:w-6 desktop:h-6" />
            }
            fullWidth
          >
            <Text>{LL.homepage.qr.ios()}</Text>
          </Button>
        </div>
      </div>
      <div className="qr">
        <div className="flex justify-center items-center">
          <img src={QRImage} />
        </div>
      </div>
    </Container>
  );
};
