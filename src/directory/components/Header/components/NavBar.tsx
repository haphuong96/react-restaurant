import { useI18nContext } from "@/commons/i18n/i18n-react";

export const NavBar = () => {
  const { LL } = useI18nContext();

  return (
    <div className="flex gap-8 *:px-1.5 *:py-3 *:uppercase">
      <a href="#">{LL.navbar.home()}</a>
      <button>{LL.navbar.menu()}</button>
      <a href="#">{LL.navbar.about()}</a>
      <a href="#">{LL.navbar.promotion()}</a>
    </div>
  );
};
