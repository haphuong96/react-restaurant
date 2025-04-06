type _SliderArrowProps = {
  children?: React.ReactNode;
  className?: string;
  customClass?: string;
  customStyle?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const SliderArrow = ({
  children,
  className,
  customClass,
  customStyle,
  onClick,
}: _SliderArrowProps) => {
  return (
    <div
      className={customClass || className}
      style={customStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export type SliderArrowProps = Omit<_SliderArrowProps, "className">;
