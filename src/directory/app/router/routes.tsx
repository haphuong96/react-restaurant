import { Route, Routes } from "react-router";
import { paths } from "./paths";
import { SearchPage } from "../../pages/search/SearchPage";

export const DirectoryRoutes = () => {
  return (
    <Routes>
      <Route path={paths.search} element={<SearchPage />}></Route>
    </Routes>
  );
};
