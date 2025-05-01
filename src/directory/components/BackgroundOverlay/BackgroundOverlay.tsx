export type BackgroundOverlayProps = {
  children?: React.ReactNode;
  backgroundImg?: string;
  className?: string;
};

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  children,
  backgroundImg,
  className,
}) => {
  const style = backgroundImg
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${backgroundImg})`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }
    : undefined;

  return (
    <div
      className={`relative${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};
