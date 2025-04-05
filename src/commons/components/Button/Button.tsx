import { ReactButtonProps } from "@/commons/types/generics";
import { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & ReactButtonProps;

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
