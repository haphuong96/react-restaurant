import { ReactNode } from "react";
import { ReactDivProps } from "@/commons/types/generics";
import clsx from "clsx";

export type ContainerProps = {
  children?: ReactNode;
  className?: string;
  bgClassName?: string;
} & ReactDivProps;

export const Container = ({
  children,
  className,
  bgClassName,
  ...rest
}: ContainerProps) => {
  const containerClass = clsx("px-2 max-w-7xl mx-auto", className);
  return (
    <div className={bgClassName}>
      <div className={containerClass} {...rest}>
        {children}
      </div>
    </div>
  );
};
