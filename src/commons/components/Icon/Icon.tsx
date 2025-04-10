import { ReactSVGProps } from "@/commons/types/generics";
import { IconName, ICONS } from "./icon-list";

export type IconProps = {
  children?: React.ReactNode;
  name: IconName;
  className?: string;
} & ReactSVGProps;

/**
 * Can use inline SVG JSX if Icon needs to be customized to include nested children inside.
 */
export const Icon = ({ children, name, className, ...rest }: IconProps) => {
  const Component = ICONS[name];

  return (
    <Component className={`${className}`} {...rest}>
      {children}
    </Component>
  );
};
