import React from "react";
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
      stars.push(<Star id={i} key={i} fillPercentage={fillPercentage} />);
    }

    return stars;
  };

  return <div className={`flex gap-1 ${className}`}>{renderStars()}</div>;
};

export type StarProps = {
  id: number;
  fillPercentage: number;
  size?: number;
  color?: string;
  filledColor?: string;
};

export const Star = ({
  id,
  fillPercentage,
  size = 14,
  color = "#FFD02C",
  filledColor = "#DDDDDD",
}: StarProps) => {
  return (
    <Icon
      name="product-rating"
      fill={`url('#fill-${id}')`}
      width={size}
      height={size}
    >
      <defs>
        <linearGradient id={`fill-${id}`}>
          <stop offset={`${fillPercentage}%`} stopColor={color} />
          <stop offset={`${fillPercentage}%`} stopColor={filledColor} />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default StarRating;
