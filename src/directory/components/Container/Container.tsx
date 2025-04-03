import { ReactNode } from "react";

export type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};
