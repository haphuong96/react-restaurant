import clsx from "clsx";
import { JSX, ReactNode } from "react";

type TypeScale = "t2" | "t3" | "t4" | "ct3" | "b3";

// Map typescale to font size classes
const typeScaleClasses: Record<
  TypeScale,
  { tag: keyof JSX.IntrinsicElements; className: string }
> = {
  t2: {
    tag: "h2",
    className: clsx(
      "uppercase font-medium text-xl mini-tablet:text-2xl desktop:text-[32px]"
    ),
  },
  t3: {
    tag: "h3",
    className: clsx(
      "text-base mini-tablet:text-xl tablet:text-2xl desktop:text-4xl uppercase font-medium"
    ),
  },
  t4: {
    tag: "h4",
    className: clsx("text-2xl"),
  },
  ct3: {
    tag: "h3",
    className: clsx("font-light text-base"),
  },
  b3: {
    tag: "span",
    className: clsx("text-xs mini-tablet:text-sm desktop:text-base"),
  },
};

export type TextProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  children?: ReactNode;
  className?: string;
  typeScale?: TypeScale;
  as?: keyof JSX.IntrinsicElements;
};

export const Text = ({
  children,
  className,
  typeScale = "b3",
  as,
  ...rest
}: TextProps) => {
  const Tag = as || typeScaleClasses[typeScale].tag;
  const combinedClassName = `${typeScaleClasses[typeScale].className} ${
    className ? className : ""
  }`;

  return (
    <Tag className={combinedClassName} {...rest}>
      {children}
    </Tag>
  );
};
