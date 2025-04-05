import { ReactNode } from "react";
import { HTMLDivProps } from "../../../commons/types/generics";

export type ContainerProps = {
  children?: ReactNode;
  className?: string;
} & HTMLDivProps;

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};
