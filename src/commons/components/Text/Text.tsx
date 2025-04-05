// TODO: Re-evaluate the need for this component
import { JSX, ReactNode } from "react";

type TypeScale = "t1" | "t2" | "bt1" | "bt2" | "bt3";

// TODO: check if it is possible to use Tailwind config to define these values
// Map typescale to font size classes
const typeScaleClasses: Record<TypeScale, string> = {
  t1: "text-2xl",
  t2: "text-xl",
  bt1: "text-lg",
  bt2: "text-base",
  bt3: "text-sm",
};

export type TextProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: ReactNode;
  className?: string;
  typeScale?: TypeScale;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const Text = ({
  children,
  className,
  typeScale = "bt3",
  ...rest
}: TextProps) => {
  return (
    <span className={`${typeScaleClasses[typeScale]} ${className}`} {...rest}>
      {children}
    </span>
  );
};
