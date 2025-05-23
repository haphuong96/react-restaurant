import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";
import { Container } from "../Container/Container";
import { Text } from "@/commons/components/Text/Text";

export type PageLayoutProps = {
  children?: ReactNode;
  title?: string;
};

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main>
        {title && (
          <Container
            bgClassName="bg-primary-beige"
            className="py-5 text-center"
          >
            <Text typeScale="t2">{title}</Text>
          </Container>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};
