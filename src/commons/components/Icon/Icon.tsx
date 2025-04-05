import { ReactSVGProps } from "@/commons/types/generics";
import { IconName, ICONS } from "./icon-list";

export type IconProps = {
  name: IconName;
  className?: string;
} & ReactSVGProps;

export const Icon = ({ name, className, ...rest }: IconProps) => {
  const Component = ICONS[name];

  return <Component className={`${className}`} {...rest} />;
};
