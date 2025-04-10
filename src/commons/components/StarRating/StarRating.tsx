import React from "react";
import { Icon } from "../Icon/Icon";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  showValue?: boolean;
  reviews?: number;
  interactive?: boolean;
  onChange?: (newRating: number) => void;
  color?: "yellow" | "primary";
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = "md",
  className = "",
}) => {
  const sizeClass = {
    xs: "w-1",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const fillLevel = rating - i;
      if (fillLevel >= 1) {
        //fully filled star
        stars.push(<Star id={i} key={i} fill={1} />);
      } else if (fillLevel > 0 && fillLevel < 1) {
        // partially filled star
        stars.push(<Star id={i} key={i} fill={fillLevel} />);
      } else {
        stars.push(<Star id={i} key={i} fill={0} />);
      }
    }

    return stars;
  };
  return (
    <div className={`flex items-center ${sizeClass[size]} ${className}`}>
      <div className="flex">{renderStars()}</div>
      {/* {showValue && (
        <span className="ml-1 text-gray-600 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
      {reviews !== undefined && (
        <span className="ml-1 text-gray-500">
          ({reviews} {reviews === 1 ? "review" : "reviews"})
        </span>
      )} */}
    </div>
  );
};

export const Star = ({ id, fill }: { id: number; fill: number }) => {
  // fill should be between 0 and 1 (0% to 100%)
  const fillPercentage = Math.max(0, Math.min(1, fill)) * 100;
  return (
    <>
      <Icon name="product-rating" fill={`url('#fill-${id}')`}>
        <defs>
          <linearGradient id={`fill-${id}`}>
            <stop offset={`${fillPercentage}%`} stopColor="#FFD02C" />
            <stop offset={`${fillPercentage}%`} stopColor="#DDDDDD" />
          </linearGradient>
        </defs>
      </Icon>
    </>
  );
};

export default StarRating;
