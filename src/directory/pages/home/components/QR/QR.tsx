import { Container } from "@/directory/components/Container/Container";
import MobileImage from "@/directory/assets/mobile.png";
import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import QRImage from "@/directory/assets/qr.png";

export const QR = () => (
  <Container className="flex">
    <div className="basis-0 grow flex justify-center">
      <img src={MobileImage} />
    </div>
    <div className="basis-0 grow text-center flex flex-col my-8">
      <div className="font-semibold uppercase text-4xl my-4">
        LA PLANCHE IS AVAILABLE FOR{" "}
        <span className="font-extrabold">ANDROID</span> AND{" "}
        <span className="font-extrabold">IOS</span>
      </div>
      <div className="flex gap-3 my-8 justify-center">
        <Button
          variant="primary"
          className="rounded-[40px] uppercase font-bold min-w-44"
          icon={<Icon name="android" />}
        >
          Android
        </Button>
        <Button
          variant="primary"
          className="rounded-[40px] uppercase font-bold min-w-44"
          icon={<Icon name="ios" />}
        >
          IOS
        </Button>
      </div>
      <div className="flex justify-center">
        <img src={QRImage} />
      </div>
    </div>
  </Container>
);
