export type SliderArrowProps = {
  children: React.ReactNode;
  className?: string;
  customStyle?: React.CSSProperties;
  onClick?: () => unknown;
};

export const SliderArrow = ({
  children,
  className,
  customStyle,
  onClick,
}: SliderArrowProps) => {
  return (
    <div className={className} style={{ ...customStyle }} onClick={onClick}>
      {children}
    </div>
  );
};
