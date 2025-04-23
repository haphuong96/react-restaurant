import { useI18nContext } from "@/commons/i18n/i18n-react";
import { useState } from "react";
import { Link } from "react-router";

const MENU_CATEGORIES = [
  "Low Price",
  "Average Price",
  "High Price",
  "Luxury Price",
];

export const NavBar = () => {
  const { LL } = useI18nContext();
  const [isMenuLinkHover, setIsMenuLinkHover] = useState(false);
  const [isMenuNavigationHover, setIsMenuNavigationHover] = useState(false);
  const shouldShowMenu = isMenuLinkHover || isMenuNavigationHover;

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex gap-8 *:px-1.5 *:py-3 *:uppercase">
        <Link
          to="#"
          className="border-b border-b-transparent hover:border-b-primary-red transition-all duration-200"
        >
          {LL.navbar.home()}
        </Link>
        <Link
          to="#"
          onMouseEnter={() => setIsMenuLinkHover(true)}
          onMouseLeave={() => setIsMenuLinkHover(false)}
          className={`border-b transition-all duration-200${
            shouldShowMenu ? " border-b-primary-red" : " border-b-transparent"
          }`}
        >
          {LL.navbar.menu()}
        </Link>
        <Link
          to="#"
          className="border-b border-b-transparent hover:border-b-primary-red transition-all duration-200"
        >
          {LL.navbar.about()}
        </Link>
        <Link
          to="#"
          className="border-b border-b-transparent hover:border-b-primary-red transition-all duration-200"
        >
          {LL.navbar.promotion()}
        </Link>
      </div>
      {shouldShowMenu && (
        <div
          className="bg-primary-red text-white w-full absolute top-full z-10"
          onMouseEnter={() => setIsMenuNavigationHover(true)}
          onMouseLeave={() => setIsMenuNavigationHover(false)}
        >
          <div className="py-5 px-48 grid grid-cols-4 gap-x-4 gap-y-2">
            {MENU_CATEGORIES.map((menuHeader) => (
              <Link
                to="#"
                key={menuHeader}
                className="font-semibold uppercase py-1 my-1 border-b border-b-transparent hover:border-b-white"
              >
                {menuHeader}
              </Link>
            ))}

            {[
              "Meat Only",
              "Meat Only",
              "Meat Only",
              "Meat Only",
              "Meat + Cheese",
              "Meat + Cheese",
              "Meat + Cheese",
              "Meat + Cheese",
              "Cheese Only",
              "Cheese Only",
              "Cheese Only",
              "Cheese Only",
            ].map((item, index) => (
              <Link to="#" key={index} className="hover:opacity-80">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
