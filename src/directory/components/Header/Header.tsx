import { Container } from "@/directory/components/Container/Container";
import logo from "@/commons/assets/logo.svg";
import { UserMenu } from "./components/UserMenu";
import { NavBar } from "./components/NavBar";

export const Header = () => {
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
