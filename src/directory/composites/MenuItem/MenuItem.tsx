import React from "react";
import { Button } from "@/commons/components/Button/Button";
import { StarRating } from "@/commons/components/StarRating/StarRating";
import { Text } from "@/commons/components/Text/Text";

interface MenuItemProps {
  name: string;
  price: number;
  currentPrice: number;
  thumbnail: string | null;
  rating?: number;
  className?: string;
}

export const MenuItemCard: React.FC<MenuItemProps> = ({
  name,
  price,
  currentPrice,
  thumbnail,
  rating = 0,
  className,
}) => {
  return (
    <div
      className={`border border-[#EDEDED] flex flex-col items-center rounded-sm ${
        className ? className : ""
      }`}
    >
      {/* card image */}
      <div className="w-full min-h-44 flex items-center justify-center bg-gray-50 rounded-t-sm">
        {thumbnail ? (
          <img src={thumbnail} alt={name} className="menu-item-thumbnail" />
        ) : (
          <div className="">No Image</div>
        )}
      </div>

      {/* card title */}
      <Text typeScale="ct3" className="text-primary-red my-2">
        {name}
      </Text>

      {/* card rating */}
      <StarRating rating={rating} className="my-4" />

      {/* card price */}
      <div className="relative">
        <Text
          typeScale="b3"
          style={{
            fontWeight: "bold",
          }}
        >
          €{currentPrice.toFixed(2)}
        </Text>
        {currentPrice < price && (
          <>
            <Text
              typeScale="b3"
              className="line-through text-[#9A9A9A] absolute left-20"
              style={{
                fontWeight: "500",
              }}
            >
              €{price.toFixed(2)}
            </Text>
          </>
        )}
      </div>

      <Button variant="primary" className="my-4">
        Add to Cart
      </Button>
    </div>
  );
};

export default MenuItemCard;
