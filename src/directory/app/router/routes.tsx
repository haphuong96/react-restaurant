import { Route, Routes } from "react-router";
import { paths } from "./paths";
import { SearchPage } from "../../pages/search/SearchPage";
import { HomePage } from "../../pages/home/HomePage";

export const DirectoryRoutes = () => {
  return (
    <Routes>
      <Route path={paths.index} element={<HomePage />}></Route>
      <Route path={paths.search} element={<SearchPage />}></Route>
    </Routes>
  );
};
