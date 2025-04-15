import { ReactSVGProps } from "@/commons/types/generics";
import { IconName, ICONS } from "./icon-list";

export type IconProps = {
  name: IconName;
} & ReactSVGProps;

/**
 * Can use inline SVG JSX if Icon needs to be customized to include nested children inside.
 */
export const Icon = ({ name, width = 24, height = 24, ...rest }: IconProps) => {
  const Component = ICONS[name];

  return <Component width={width} height={height} {...rest} />;
};
