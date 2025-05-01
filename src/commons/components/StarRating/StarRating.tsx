import React, { useId } from "react";
import { Icon } from "../Icon/Icon";

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  className?: string;
  // TODO: custom character if not using default star component
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className,
}) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      // fill should be between 0 and 1 (0% to 100%)
      const fillPercentage = Math.max(0, Math.min(1, rating - i)) * 100;
      stars.push(<Star key={i} fillPercentage={fillPercentage} />);
    }

    return stars;
  };

  return <div className={`flex gap-1 ${className}`}>{renderStars()}</div>;
};

export type StarProps = {
  fillPercentage: number;
  size?: number;
  color?: string;
  filledColor?: string;
};

export const Star = ({
  fillPercentage,
  size = 14,
  color = "#FFD02C",
  filledColor = "#DDDDDD",
}: StarProps) => {
  const fillId = useId();

  return (
    <Icon
      name="product-rating"
      fill={`url('#${fillId}')`}
      width={size}
      height={size}
    >
      <defs>
        <linearGradient id={`${fillId}`}>
          <stop offset={`${fillPercentage}%`} stopColor={color} />
          <stop offset={`${fillPercentage}%`} stopColor={filledColor} />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default StarRating;
