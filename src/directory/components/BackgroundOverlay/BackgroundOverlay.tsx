export type BackgroundOverlayProps = {
  children?: React.ReactNode;
  backgroundImgUrl?: string;
  className?: string;
};

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  children,
  backgroundImgUrl,
  className,
}) => {
  const style = backgroundImgUrl
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(../src${backgroundImgUrl})`,
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
