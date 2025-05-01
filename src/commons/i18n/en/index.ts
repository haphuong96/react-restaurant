import type { BaseTranslation } from "../i18n-types";

const en = {
  // TODO: your translations go here
  navbar: {
    home: "Home",
    menu: "Menu",
    about: "About",
    promotion: "Promotion",
  },
  homepage: {
    jumbotron: {
      delicious_delights_shared_moments: "Delicious Delights, Shared Moments",
      order_now: "Order now",
    },
    best_seller: "Best seller",
    our_menu: "Our menu",
    menu_category: {
      low_price: "Low price",
      high_price: "High price",
      average_price: "Average price",
      luxury_price: "Luxury price",
    },
  },
} satisfies BaseTranslation;

export default en;
