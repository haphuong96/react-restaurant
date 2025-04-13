import { PageLayout } from "@/directory/components/PageLayout/PageLayout";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";
import { BestSeller } from "./components/BestSeller/BestSeller";
import { HomePageContextProvider } from "./HomePage.ContextProvider";

export const HomePageView: React.FC = () => (
  <PageLayout>
    <Jumbotron />
    <BestSeller />
  </PageLayout>
);

// HomePageView can only access data provided by HomePageContextProvider
export const HomePage: React.FC = () => {
  return (
    <HomePageContextProvider>
      <HomePageView />
    </HomePageContextProvider>
  );
};

// // or it can access data from passed down props
// import { Product } from "@/directory/services/api/ProductService";
// import { useEffect, useState } from "react";
// import { productService } from "@/directory/app/services/services";

// export type HomePageViewProps = {
//   bestSellers?: Product[];
// };

// export const HomePageView: React.FC<HomePageViewProps> = ({ bestSellers }) => (
//   <PageLayout>
//     <Jumbotron />
//     <BestSeller products={bestSellers} />
//   </PageLayout>
// );

// export const HomePage: React.FC = () => {
//   const [bestSellers, setBestSellers] = useState<Product[]>();

//   useEffect(() => {
//     productService
//       .getBestSellers()
//       .then(({ data }) => {
//         setBestSellers(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching best sellers:", error);
//       });
//   });
//   return <HomePageView bestSellers={bestSellers} />;
// };
