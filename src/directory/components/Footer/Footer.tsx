import logo from "@/commons/assets/logo.svg";
import { Container } from "../Container/Container";
import { Icon } from "@/commons/components/Icon/Icon";
import { Link } from "react-router";
import { useI18nContext } from "@/commons/i18n/i18n-react";

export const Footer = () => {
  const { LL } = useI18nContext();
  const footerItems = [
    {
      header: LL.footer.categories(),
      items: [
        <Link to="#">{LL.navbar.menu()}</Link>,
        <Link to="#">{LL.navbar.about()}</Link>,
        <Link to="#">{LL.navbar.promotion()}</Link>,
      ],
    },
    {
      header: LL.footer.information(),
      items: [LL.footer.company_name(), LL.footer.address()],
    },
  ];

  return (
    <div className="bg-[#F5EAEA]">
      <Container className="flex pb-8">
        <div className="basis-0 grow">
          <div className="w-fit flex flex-col items-center gap-2">
            <img src={logo} className="w-48" />
            <div className="flex gap-4">
              <Link to="#">
                <Icon name="media-facebook" />
              </Link>
              <Link to="#">
                <Icon name="media-twitter" />
              </Link>
              <Link to="#">
                <Icon name="media-instagram" />
              </Link>
            </div>
          </div>
        </div>
        {footerItems.map(({ header, items }, index) => (
          <div key={index} className="basis-0 grow flex mt-8">
            <div className="flex flex-col gap-1">
              <div className="font-bold my-3">{header}</div>
              {items.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
