import { ReactNode } from "react";
import { ReactDivProps } from "@/commons/types/generics";

export type ContainerProps = {
  children?: ReactNode;
  className?: string;
} & ReactDivProps;

export const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={`px-2 max-w-7xl mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
};
