import { ReactSVGProps } from "@/commons/types/generics";
import { IconName, ICONS } from "./icon-list";

export type IconProps = {
  name: IconName;
} & ReactSVGProps;

/**
 * Can use inline SVG JSX if Icon needs to be customized to include nested children inside.
 */
export const Icon = ({ name, ...rest }: IconProps) => {
  const Component = ICONS[name];

  return <Component {...rest} />;
};
