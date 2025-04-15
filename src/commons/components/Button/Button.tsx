import { ReactButtonProps } from "@/commons/types/generics";
import { ReactNode } from "react";

// Define button variant options
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "danger"
  | "default";
export type ButtonSize = "sm" | "md" | "lg";

// Define radius options - can be used in other components too
export type BorderRadius =
  | "rounded-none"
  | "rounded-sm"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-3xl"
  | "rounded-full"
  | number;

// Map variants to appropriate Tailwind classes
const variantClasses: Record<ButtonVariant, string> = {
  default: "",
  primary:
    "bg-[var(--color-primary-red)] text-white hover:opacity-90 shadow-[0px_10px_20px_0px_#C5053333] px-9 py-2.5",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline:
    "bg-transparent border border-[var(--color-primary-red)] text-[var(--color-primary-red)] hover:bg-[var(--color-primary-red)] hover:bg-opacity-10",
  text: "bg-transparent text-[var(--color-primary-red)] hover:underline",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: BorderRadius;
  fullWidth?: boolean;
} & ReactButtonProps;

export const Button = ({
  children,
  className = "",
  variant = "default",
  radius = "rounded-lg", // Default to 8px
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  // Handle radius - can be a full Tailwind utility class or a custom pixel value
  let radiusClass = "";
  if (typeof radius === "number") {
    rest.style = {
      ...rest.style,
      borderRadius: `${radius}px`,
    };
  } else {
    radiusClass = radius;
  }

  const classes = [
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    radiusClass,
    "cursor-pointer transition-all duration-200",
    className,
  ].join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
