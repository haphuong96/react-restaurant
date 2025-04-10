import React from "react";
import { Button } from "@/commons/components/Button/Button";
import { StarRating } from "@/commons/components/StarRating/StarRating";

interface MenuItemProps {
  name: string;
  price: number;
  currentPrice: number;
  isBestSeller: boolean;
  thumbnail: string | null;
  rating?: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  currentPrice,
  isBestSeller,
  thumbnail,
  rating = 2,
}) => {
  return (
    <div className="border border-black">
      {thumbnail ? (
        <img src={thumbnail} alt={name} className="menu-item-thumbnail" />
      ) : (
        <div className="menu-item-placeholder">No Image</div>
      )}

      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>

        {rating > 0 && (
          <StarRating rating={rating} size="xs" className="mt-1 mb-2" />
        )}

        {isBestSeller && <span className="menu-item-badge">Best Seller</span>}

        <div className="menu-item-prices">
          {currentPrice < price ? (
            <>
              <span className="menu-item-original-price">
                ${price.toFixed(2)}
              </span>
              <span className="menu-item-current-price">
                ${currentPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="menu-item-current-price">${price.toFixed(2)}</span>
          )}
        </div>

        <Button className="menu-item-button">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MenuItem;
