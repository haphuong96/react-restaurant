import { Container } from "@/directory/components/Container/Container";
import logo from "@/commons/assets/logo.svg";
import { UserMenu } from "./components/UserMenu";
import { NavBar } from "./components/NavBar";
import { Icon } from "@/commons/components/Icon/Icon";
import { Button } from "@/commons/components/Button/Button";
import { useState } from "react";

export const Header = () => {
  const [showNavBarMobile, setShowNavBarMobile] = useState<boolean>(false);

  return (
    <header className="mb-3">
      <Container>
        <div className="relative w-full flex justify-center">
          <div className="basis-0 grow flex items-center sm:invisible">
            <Button
              icon={<Icon name="menu-line" />}
              onClick={() => {
                setShowNavBarMobile(!showNavBarMobile);
              }}
            ></Button>
          </div>
          <div className="basis-0 grow flex justify-center">
            <img src={logo} />
          </div>
          <div className="basis-0 grow flex justify-end">
            <UserMenu />
          </div>
        </div>
      </Container>
      <NavBar
        showNavBarMobile={showNavBarMobile}
        onCloseMobileNav={() => setShowNavBarMobile(false)}
      />
    </header>
  );
};
