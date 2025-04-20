import { Text } from "@/commons/components/Text/Text";
import { Container } from "@/directory/components/Container/Container";
import MenuItemCard from "@/directory/composites/MenuItem/MenuItem";
import { useHomePageContext } from "../../HomePage.Context";
import { useI18nContext } from "@/commons/i18n/i18n-react";
import { Slider } from "@/directory/components/Slider/Slider";

export const BestSeller: React.FC = () => {
  const { LL } = useI18nContext();

  const { bestSellers } = useHomePageContext();

  return (
    <Container className="text-center py-8">
      <Text typeScale="t2" className="my-5">
        {LL.homepage.best_seller()}
      </Text>
      {bestSellers?.length && (
        <Slider
          slidesToShow={4}
          slidesToScroll={1}
          className="flex gap-1"
          dots={false}
        >
          {bestSellers.map((product) => (
            <MenuItemCard
              key={product.id}
              price={product.price}
              currentPrice={product.currentPrice}
              name={product.name}
              thumbnail={product.thumbnail}
              className="mx-2"
            />
          ))}
        </Slider>
      )}
    </Container>
  );
};
