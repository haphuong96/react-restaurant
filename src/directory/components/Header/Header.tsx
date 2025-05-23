import { Container } from "@/directory/components/Container/Container";
import logo from "@/commons/assets/logo.png";
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
        <div className="relative w-full grid grid-cols-3 items-center">
          <div className="sm:invisible">
            <Button
              icon={<Icon name="menu-line" />}
              onClick={() => {
                setShowNavBarMobile(!showNavBarMobile);
              }}
            ></Button>
          </div>
          <div className="flex justify-center">
            <img src={logo} width={130} />
          </div>
          <div className="flex justify-end">
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
