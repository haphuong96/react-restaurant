import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import { RouterLinkProps } from "@/commons/types/generics";
import { useState } from "react";
import { Link } from "react-router";

export type NavBarProps = {
  showNavBarMobile: boolean;
  onCloseMobileNav: () => void;
};

export const NavBar: React.FC<NavBarProps> = ({
  showNavBarMobile,
  onCloseMobileNav,
}) => {
  const { LL } = useI18nContext();
  const [isMenuLinkHover, setIsMenuLinkHover] = useState(false);
  const [isMenuNavigationHover, setIsMenuNavigationHover] = useState(false);
  const isDesktopMenuVisible = isMenuLinkHover || isMenuNavigationHover;

  const navItems = [
    {
      id: "home",
      header: LL.navbar.home(),
    },
    {
      id: "menu",
      header: LL.navbar.menu(),
      children: [
        {
          header: LL.homepage.menu_category.low_price(),
          children: ["Meat Only", "Meat + Cheese", "Cheese Only"],
        },
        {
          header: LL.homepage.menu_category.average_price(),
          children: ["Meat Only", "Meat + Cheese", "Cheese Only"],
        },
        {
          header: LL.homepage.menu_category.high_price(),
          children: ["Meat Only", "Meat + Cheese", "Cheese Only"],
        },
        {
          header: LL.homepage.menu_category.luxury_price(),
          children: ["Meat Only", "Meat + Cheese", "Cheese Only"],
        },
      ],
    },
    {
      id: "about",
      header: LL.navbar.about(),
    },
    {
      id: "promotion",
      header: LL.navbar.promotion(),
    },
  ];

  return (
    <div className="flex flex-col items-center relative">
      {/*----------------NAVIGATION BAR ON DESKTOP---------------- */}
      <div className="hidden sm:flex gap-8 *:px-1.5 *:py-3.5 *:uppercase">
        <DesktopNavLink to="#">{LL.navbar.home()}</DesktopNavLink>
        <DesktopNavLink
          to="#"
          onMouseEnter={() => setIsMenuLinkHover(true)}
          onMouseLeave={() => setIsMenuLinkHover(false)}
          className={`border-b transition-all duration-200${
            isDesktopMenuVisible
              ? " border-b-primary-red"
              : " border-b-transparent"
          }`}
        >
          {LL.navbar.menu()}
        </DesktopNavLink>
        <DesktopNavLink to="#">{LL.navbar.about()}</DesktopNavLink>
        <DesktopNavLink to="#">{LL.navbar.promotion()}</DesktopNavLink>
      </div>
      {isDesktopMenuVisible && (
        <div
          className="bg-primary-red text-white w-full absolute top-full z-10 py-5 px-8 md:px-24 lg:px-48 grid grid-cols-4 gap-x-4 gap-y-2 text-sm lg:text-base"
          onMouseEnter={() => setIsMenuNavigationHover(true)}
          onMouseLeave={() => setIsMenuNavigationHover(false)}
        >
          {navItems
            .find((it) => it.id === "menu")
            ?.children?.map(({ header, children }, index) => (
              <div key={index} className="flex flex-col gap-3">
                <Link
                  to="#"
                  key={index}
                  className="font-semibold py-1 uppercase border-b border-b-transparent hover:border-b-white"
                >
                  {header}
                </Link>
                <div className="flex flex-col gap-2">
                  {children.map((third, thirdIndex) => (
                    <Link to="#" key={thirdIndex} className="hover:opacity-80">
                      {third}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/*----------------NAVIGATION BAR ON MOBILE---------------- */}
      {showNavBarMobile && (
        <div className="bg-primary-red text-white fixed h-screen w-screen top-0 z-10 py-8 px-6 flex flex-col gap-5 overflow-scroll">
          {navItems.map(({ header, children }) => (
            <div>
              <Link to="#" className="uppercase font-semibold hover:opacity-80">
                {header}
              </Link>

              {children?.length && (
                <div className="pl-3 flex flex-col gap-4 my-4">
                  {children.map(({ header, children }) => (
                    <div className="flex flex-col gap-4">
                      <div>
                        <Link
                          to="#"
                          className="uppercase font-medium hover:opacity-80"
                        >
                          {header}
                        </Link>
                      </div>

                      <div className="pl-3 flex flex-col gap-4">
                        {children.map((it) => (
                          <div className="font-normal text-sm">
                            <Link to="#" className="hover:opacity-80">
                              {it}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div
            className="absolute top-0 right-0"
            style={{ padding: "inherit" }}
          >
            <Button
              icon={<Icon name="slider-chevron-left" />}
              onClick={onCloseMobileNav}
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
};

type DesktopNavItemProps = {
  to: string;
  children: string | React.ReactNode;
} & RouterLinkProps;

const DesktopNavLink: React.FC<DesktopNavItemProps> = ({
  to,
  children,
  ...rest
}) => (
  <Link
    to={to}
    className="border-b border-b-transparent hover:border-b-primary-red transition-all duration-200"
    {...rest}
  >
    {children}
  </Link>
);
