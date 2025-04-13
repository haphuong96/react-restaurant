import { JSX, ReactNode } from "react";

type TypeScale = "t2" | "ct3" | "b3";

// Map typescale to font size classes
const typeScaleClasses: Record<
  TypeScale,
  { tag: keyof JSX.IntrinsicElements; className: string }
> = {
  t2: {
    tag: "h2",
    className: "uppercase font-medium text-[32px]",
  },
  ct3: {
    tag: "h3",
    className: "font-light text-base",
  },
  b3: {
    tag: "span",
    className: "font-normal text-base",
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
