import { JSX, ReactNode } from "react";

type TypeScale = "t1" | "t2" | "bt1" | "bt2" | "bt3";

type FontWeight = "regular" | "medium" | "semibold" | "bold";

// TODO: check if it is possible to use Tailwind config to define these values
// Map typescale to font size classes
const typeScaleClasses: Record<TypeScale, string> = {
  t1: "text-2xl",
  t2: "text-xl",
  bt1: "text-lg",
  bt2: "text-base",
  bt3: "text-sm",
};

// Map font weight to font-weight classes
const fontWeightClasses: Record<FontWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export type TextProps = {
  children?: ReactNode;
  className?: string;
  typeScale?: TypeScale;
  fontWeight?: FontWeight;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const Text = ({
  children,
  className,
  fontWeight = "regular",
  typeScale = "bt3",
}: TextProps) => {
  return (
    <div
      className={`${typeScaleClasses[typeScale]} ${fontWeightClasses[fontWeight]} ${className}`}
    >
      {children}
    </div>
  );
};
