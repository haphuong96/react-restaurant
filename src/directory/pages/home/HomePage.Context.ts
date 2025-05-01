import { createContext, useContext } from "react";
import { Product } from "@/directory/services/api/ProductService";

type HomePageContextType = {
  bestSellers?: Product[];
};

// Provide default values that match the type to avoid the null type error
export const HomePageContext = createContext<HomePageContextType>({
  bestSellers: [],
});

export const useHomePageContext = () => useContext(HomePageContext);
