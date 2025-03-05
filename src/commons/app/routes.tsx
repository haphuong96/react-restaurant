import { Routes, Route } from "react-router";
import { paths } from "./paths";
import { lazy } from "react";

const DirectoryMain = lazy(() => import("../../directory/app/DirectoryMain"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.directory} element={<DirectoryMain />}>
        {/* ...route for other tracks */}
      </Route>
    </Routes>
  );
};
