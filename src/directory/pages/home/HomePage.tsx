import { PageLayout } from "@/directory/components/PageLayout/PageLayout";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";
import MenuItem from "@/directory/composites/MenuItem/MenuItem";

export const HomePage = () => {
  return (
    <PageLayout>
      <Jumbotron />
      <div className="flex">
        <MenuItem
          price={100}
          currentPrice={50}
          name="Slices of smoked turkey"
          isBestSeller={true}
          thumbnail={null}
        />
      </div>
    </PageLayout>
  );
};
