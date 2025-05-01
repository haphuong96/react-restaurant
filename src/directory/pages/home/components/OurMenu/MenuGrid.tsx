import { Text } from "@/commons/components/Text/Text";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import { BackgroundOverlay } from "@/directory/components/BackgroundOverlay/BackgroundOverlay";
import { Link } from "react-router";

export const MenuGrid = () => {
  const { LL } = useI18nContext();
  const menuItems = [
    {
      title: LL.homepage.menu_category.low_price(),
      bgImageUrl: "/directory/assets/jumbotron2.png",
      linkToUrl: "/menu/1",
    },
    {
      title: LL.homepage.menu_category.average_price(),
      bgImageUrl: "/directory/assets/jumbotron2.png",
      linkToUrl: "/menu/2",
    },
    {
      title: LL.homepage.menu_category.high_price(),
      bgImageUrl: "/directory/assets/jumbotron2.png",
      linkToUrl: "/menu/3",
    },
    {
      title: LL.homepage.menu_category.luxury_price(),
      bgImageUrl: "/directory/assets/jumbotron2.png",
      linkToUrl: "/menu/4",
    },
  ];
  return (
    <div className="flex flex-col py-8">
      <Text typeScale="t2" className="text-center my-5">
        {LL.homepage.our_menu()}
      </Text>
      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <MenuGridItem
            key={index}
            title={item.title}
            bgImageUrl={item.bgImageUrl}
            linkToUrl={item.linkToUrl}
          />
        ))}
      </div>
    </div>
  );
};

type MenuGridItemProps = {
  title: string;
  bgImageUrl: string;
  linkToUrl: string;
};

const MenuGridItem: React.FC<MenuGridItemProps> = ({
  title,
  bgImageUrl,
  linkToUrl,
}) => (
  <BackgroundOverlay
    backgroundImgUrl={bgImageUrl}
    className="h-[420px] flex items-center justify-center"
  >
    <div className="flex flex-col gap-8 items-center justify-center">
      <Text typeScale="t3" className="text-white text-center">
        {title}
      </Text>
      <Link
        to={linkToUrl}
        className="uppercase border border-white text-white shadow-[0px_4px_8px_0px_#00000026] hover:bg-white hover:text-black py-2 px-6 rounded-lg transition-all duration-200"
      >
        Explore
      </Link>
    </div>
  </BackgroundOverlay>
);
