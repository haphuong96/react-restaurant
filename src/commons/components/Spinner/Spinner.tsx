import { ReactDivProps } from "@/commons/types/generics";

export type SpinnerSize = "sm" | "md" | "lg" | "xl";
export type SpinnerType = "border" | "grow";

export type SpinnerProps = {
  size?: SpinnerSize;
  type?: SpinnerType;
  color?: string;
  className?: string;
  fullScreen?: boolean;
  text?: string;
} & ReactDivProps;

/**
 * Spinner component for loading states
 *
 * @param size - Size of the spinner: sm (16px), md (24px), lg (32px), xl (48px)
 * @param type - Type of animation: border (rotating border) or grow (growing circle)
 * @param color - Color of the spinner (defaults to primary red)
 * @param className - Additional CSS classes
 * @param fullScreen - Whether to display the spinner as a fullscreen overlay
 * @param text - Optional text to display under the spinner
 */
export const Spinner = ({
  size = "lg",
  type = "border",
  color = "var(--color-primary-red)",
  className = "",
  fullScreen = false,
  text,
  ...rest
}: SpinnerProps) => {
  // Size mapping
  const sizeMap: Record<SpinnerSize, { width: string; borderWidth: string }> = {
    sm: { width: "w-4 h-4", borderWidth: "border-2" },
    md: { width: "w-6 h-6", borderWidth: "border-2" },
    lg: { width: "w-8 h-8", borderWidth: "border-3" },
    xl: { width: "w-12 h-12", borderWidth: "border-4" },
  };

  const { width, borderWidth } = sizeMap[size];

  const spinnerBorder =
    type === "border" ? (
      <div
        className={`${width} ${borderWidth} border-solid rounded-full animate-spin ${className}`}
        style={{
          borderTopColor: color,
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
        }}
        {...rest}
      />
    ) : (
      <div
        className={`${width} rounded-full animate-pulse ${className}`}
        style={{ backgroundColor: color }}
        {...rest}
      />
    );

  // If fullScreen, we wrap the spinner in a fullscreen overlay
  if (fullScreen) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 z-50">
        {spinnerBorder}
        {text && <div className="mt-4 text-white">{text}</div>}
      </div>
    );
  }

  // Otherwise, just return the spinner
  return (
    <div className="flex flex-col items-center">
      {spinnerBorder}
      {text && <div className="mt-2 text-sm text-gray-600">{text}</div>}
    </div>
  );
};
