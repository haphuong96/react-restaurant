import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";

export type PageLayoutProps = {
  children?: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
