import { Text } from "@/commons/components/Text/Text";
import { Container } from "@/directory/components/Container/Container";
import MenuItemCard from "@/directory/composites/MenuItem/MenuItem";
import { useHomePageContext } from "../../HomePage.Context";
import { SliderCommonTemplate as Slider } from "@/directory/composites/Slider/CommonTemplate";
import "./BestSeller.style.css";

export const BestSeller: React.FC = () => {
  const { bestSellers } = useHomePageContext();

  return (
    <Container className="text-center py-8">
      <Text typeScale="t2" className="my-5">
        Best Seller
      </Text>
      {bestSellers?.length && (
        <Slider slidesToShow={4} slidesToScroll={1} className="slider">
          {bestSellers.map((product) => (
            <MenuItemCard
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
