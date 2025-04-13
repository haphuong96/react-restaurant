import { useEffect, useState } from "react";
import { productService } from "@/directory/app/services/services";
import { Product } from "@/directory/services/api/ProductService";
import { HomePageContext } from "./HomePage.Context";

export type HomePageContextProviderProps = {
  children: React.ReactNode;
};

export const HomePageContextProvider: React.FC<
  HomePageContextProviderProps
> = ({ children }) => {
  const [bestSellers, setBestSellers] = useState<Product[]>();

  useEffect(() => {
    productService
      .getBestSellers()
      .then(({ data }) => {
        setBestSellers(data);
      })
      .catch((error) => {
        console.error("Error fetching best sellers:", error);
      });
  });
  return (
    <HomePageContext.Provider value={{ bestSellers }}>
      {children}
    </HomePageContext.Provider>
  );
};
