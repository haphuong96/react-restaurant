import { ReactNode } from "react";

export type DirectContextProps = {
  children: ReactNode;
};
export const DirectoryContext = ({ children }: DirectContextProps) => {
  return <div>{children}</div>;
};
