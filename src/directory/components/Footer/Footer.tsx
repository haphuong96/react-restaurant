import logo from "@/commons/assets/logo.svg";
import { Container } from "../Container/Container";
import { Icon } from "@/commons/components/Icon/Icon";
import { Link } from "react-router";

export const Footer = () => (
  <div className="bg-[#F5EAEA]">
    <Container className="flex pb-8">
      <div className="basis-0 grow">
        <div className="w-fit flex flex-col items-center gap-2">
          <img src={logo} className="w-48" />
          <div className="flex gap-4">
            <Link to="#">
              <Icon name="media-facebook" />
            </Link>
            <Link to="#">
              <Icon name="media-twitter" />
            </Link>
            <Link to="#">
              <Icon name="media-instagram" />
            </Link>
          </div>{" "}
        </div>
      </div>
      <div className="basis-0 grow flex mt-8">
        <div className="flex flex-col gap-1">
          <div className="font-bold my-3">CATEGORIES</div>
          <div>
            <Link to="#">Menu</Link>
          </div>
          <div>
            <Link to="#">About</Link>
          </div>
          <div>
            <Link to="#">Promotion</Link>
          </div>
        </div>
      </div>
      <div className="basis-0 grow flex mt-8">
        <div className="flex flex-col gap-1">
          <div className="font-bold my-3">INFORMATION</div>
          <div>La Planche</div>
          <div>
            61 Montée Des Amandiers 26110 Saint-Maurice Sur EyguesFrance
          </div>
        </div>
      </div>
    </Container>
  </div>
);
