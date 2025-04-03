import { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={`py-2 px-5 ${className}`}>{children}</button>;
};
