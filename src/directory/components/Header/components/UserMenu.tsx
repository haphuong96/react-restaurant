import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import { Locales } from "@/commons/i18n/i18n-types";
import { sessionStorageService } from "@/commons/services/storage/sessionStorage";

export const UserMenu: React.FC = () => {
  const { locale } = useI18nContext();
  // Event handlers
  const handleLanguageChange = (locale: Locales) => {
    sessionStorageService.set("lang", locale);
    window.location.reload();
  };
  return (
    <div className="flex gap-1">
      <div className="flex items-center">
        <Button
          className={`${locale === "en" ? "font-bold" : ""} p-2`}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </Button>
        |
        <Button
          className={`${locale === "fr" ? "font-bold" : ""} p-2`}
          onClick={() => handleLanguageChange("fr")}
        >
          FR
        </Button>
      </div>

      <Button icon={<Icon name="menu-bar" />}></Button>
    </div>
  );
};
