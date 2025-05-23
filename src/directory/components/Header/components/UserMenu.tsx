import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import { Locales } from "@/commons/i18n/i18n-types";
import { sessionStorageService } from "@/commons/services/storage/sessionStorage";
import { Link } from "react-router";

export const UserMenu: React.FC = () => {
  const { locale } = useI18nContext();
  // Event handlers
  const handleLanguageChange = (locale: Locales) => {
    sessionStorageService.set("lang", locale);
    window.location.reload();
  };
  return (
    <div className="flex gap-4">
      <div className="hidden sm:block">
        <Button icon={<Icon name="menu-phone" />}></Button>
      </div>
      <div className="hidden sm:block">
        <Button icon={<Icon name="menu-favorite" />}></Button>
      </div>
      <div className="hidden sm:block">
        <Button icon={<Icon name="menu-bag" />}></Button>
      </div>
      <div className="hidden sm:block">
        <Link to="/my-account">
          <Icon name="menu-user" />
        </Link>
      </div>
      <div className="border-l hidden sm:block"></div>
      <div className="flex items-center border-b-2 border-b-primary-black sm:border-none">
        <Button
          className="font-black hover:opacity-75"
          onClick={() => handleLanguageChange(locale === "en" ? "fr" : "en")}
        >
          {locale.toUpperCase()}
        </Button>
      </div>
    </div>
  );
};
