import { ReactButtonProps } from "@/commons/types/generics";
import { ReactNode } from "react";
import "./Button.style.css";
import clsx from "clsx";

// Define button variant options
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "default"
  | "outline-white";

// Map variants to appropriate Tailwind classes

const variantClasses: Record<ButtonVariant, string> = {
  default: "",
  primary:
    "bg-[var(--color-primary-red)] text-white shadow-[0px_10px_20px_0px_#C5053333] hover:opacity-90",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline:
    "bg-transparent border border-[var(--color-primary-red)] text-[var(--color-primary-red)] hover:bg-[var(--color-primary-red)] hover:bg-opacity-10",
  "outline-white":
    "border border-white text-white shadow-[0px_4px_8px_0px_#00000026] hover:bg-white hover:text-black",
  text: "bg-transparent text-[var(--color-primary-red)] hover:underline",
};

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: ReactNode;
} & ReactButtonProps;

export const Button = ({
  children,
  className = "",
  variant = "default",
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => {
  const defaultRadius = "btn-radius";
  const defaultPadding = variant === "default" ? "" : "btn-padding";

  const classes = clsx([
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    defaultRadius,
    defaultPadding,
    "cursor-pointer transition-all duration-200 flex gap-2 justify-center items-center",
    className,
  ]);

  return (
    <button className={classes} {...rest}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
