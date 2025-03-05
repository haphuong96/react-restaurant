import { DirectoryContext } from "./DirectoryContext";
import { DirectoryRoutes } from "./router/routes";

export default function DirectoryMain() {
  return (
    <DirectoryContext>
      <DirectoryRoutes />
    </DirectoryContext>
  );
}
