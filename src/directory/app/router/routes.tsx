import { Route, Routes } from "react-router";
import { paths } from "./paths";
import { SearchPage } from "../../pages/search/SearchPage";
import { HomePage } from "../../pages/home/HomePage";
import { MyAccountPage } from "@/directory/pages/account/MyAccount";

export const DirectoryRoutes = () => {
  return (
    <Routes>
      <Route path={paths.index} element={<HomePage />}></Route>
      <Route path={paths.search} element={<SearchPage />}></Route>
      <Route path={paths.myAccount} element={<MyAccountPage />}></Route>
    </Routes>
  );
};
