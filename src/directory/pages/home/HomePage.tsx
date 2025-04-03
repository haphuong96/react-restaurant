import logo from "../../../commons/assets/logo.svg";
import {
  favoriteIcon,
  englishIcon,
  phoneIcon,
  shoppingBagIcon,
  userIcon,
} from "../../assets/menu";
import { Container } from "../../components/Container/Container";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";

export const HomePage = () => {
  return (
    <>
      <div className="h-screen flex flex-col grow">
        <Header />
        <Jumbotron />
      </div>
      <div>oho</div>
    </>
  );
};

const UserMenu = () => {
  return (
    <div className="absolute top-5 right-0 flex gap-1">
      <div className="p-2">
        <img src={englishIcon} />
      </div>
      <div className="p-2">
        <img src={phoneIcon} />
      </div>
      <div className="p-2">
        <img src={favoriteIcon} />
      </div>
      <div className="p-2">
        <img src={shoppingBagIcon} />
      </div>
      <div className="p-2">
        <img src={userIcon} />
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex gap-8 *:px-1.5 *:py-3">
      <a href="#">Home</a>
      <button>Menu</button>
      <a href="#">About</a>
      <a href="#">Promotion</a>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Container className="flex flex-col items-center">
        <div className="relative w-full flex justify-center">
          <img src={logo} />
          <UserMenu />
        </div>
        <NavBar />
      </Container>
    </header>
  );
};

export type JumbotronProps = {
  className: string;
};
